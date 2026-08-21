/**
 * Collaboration-network hero animation.
 * All motion uses continuous sin/cos so the loop is inherently seamless.
 * Swap this module to change the visual while keeping lifecycle/theming intact.
 */

import type {
  Scene,
  Camera,
  WebGLRenderer,
  BufferGeometry,
  Material,
  Object3D,
} from "three";

// ── Public config ────────────────────────────────────────────────────
export interface HeroConfig {
  canvas: HTMLCanvasElement;
  nodeCount: number;
  /** Full cycle period in seconds */
  loopDuration: number;
  /** Master intensity 0–1 controlling opacity / density */
  intensity: number;
  /** CSS custom-property name for the ink color */
  inkVar: string;
}

// ── Internals ────────────────────────────────────────────────────────
interface NodeData {
  /** Home position on the organising orbit */
  homeAngle: number;
  homeRadius: number;
  homeZ: number;
  /** Per-node drift params (unique phase & speed) */
  driftPhase: number;
  driftSpeed: number;
  driftRadius: number;
}

interface HeroState {
  renderer: WebGLRenderer;
  scene: Scene;
  camera: Camera;
  group: Object3D;
  nodes: Object3D[];
  nodeData: NodeData[];
  linePositions: Float32Array;
  lineOpacities: Float32Array;
  lineGeo: BufferGeometry;
  lineMat: Material;
  nodeMat: Material;
  hubMat: Material;
  arcMat: Material;
  maxLines: number;
  rafId: number;
  config: HeroConfig;
  disposed: boolean;
}

// ── Helpers ──────────────────────────────────────────────────────────

/** Read the ink color from a CSS custom property, falling back to theme detection. */
function readInkColor(el: HTMLElement, varName: string): string {
  const raw = getComputedStyle(el).getPropertyValue(varName).trim();
  if (raw) return raw;
  // Fallback: detect dark mode from class and use palette colors directly
  return el.classList.contains("dark") ? "#ece7de" : "#121110";
}

/** Seeded-ish deterministic pseudo-random from index (avoids Math.random drift). */
function seeded(i: number): number {
  // Simple hash — stable across reloads so the layout doesn't jump.
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// ── Init ─────────────────────────────────────────────────────────────

export async function init(cfg: HeroConfig): Promise<HeroState> {
  const THREE = await import("three");

  const { canvas, nodeCount, intensity } = cfg;
  const parent = canvas.parentElement!;
  let w = parent.offsetWidth;
  let h = parent.offsetHeight;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const scene = new THREE.Scene();
  // Depth fog for free depth-cue; color is irrelevant with alpha bg.
  scene.fog = new THREE.FogExp2(0x000000, 0.15);

  const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
  camera.position.set(0, 0, 6);

  const ink = readInkColor(document.documentElement, cfg.inkVar);
  const col = new THREE.Color(ink);

  const nodeMat = new THREE.MeshBasicMaterial({
    color: col,
    transparent: true,
    opacity: 0.8 * intensity,
  });
  const hubMat = new THREE.MeshBasicMaterial({
    color: col,
    transparent: true,
    opacity: 1.0 * intensity,
  });
  const lineMat = new THREE.LineBasicMaterial({
    color: col,
    transparent: true,
    opacity: 0.25 * intensity,
  });
  // Dashed feedback arc around the orbit
  const arcMat = new THREE.LineDashedMaterial({
    color: col,
    transparent: true,
    opacity: 0.15 * intensity,
    dashSize: 0.08,
    gapSize: 0.06,
  });

  const group = new THREE.Group();
  scene.add(group);

  // ── Build nodes ──────────────────────────────────────────────────
  const nodes: Object3D[] = [];
  const nodeData: NodeData[] = [];
  const nodeGeo = new THREE.SphereGeometry(0.055, 10, 10);
  const hubGeo = new THREE.SphereGeometry(0.09, 14, 14);

  for (let i = 0; i < nodeCount; i++) {
    const isHub = i === 0;
    const mesh = new THREE.Mesh(
      isHub ? hubGeo : nodeGeo,
      isHub ? hubMat : nodeMat,
    );
    // Distribute home positions in a loose elliptical orbit
    const angle = (i / nodeCount) * Math.PI * 2;
    const r = isHub ? 0 : 0.9 + seeded(i) * 0.9;
    const z = isHub ? 0 : (seeded(i + 100) - 0.5) * 0.5;
    mesh.position.set(Math.cos(angle) * r, Math.sin(angle) * r * 0.55, z);
    group.add(mesh);
    nodes.push(mesh);
    nodeData.push({
      homeAngle: angle,
      homeRadius: r,
      homeZ: z,
      driftPhase: seeded(i + 200) * Math.PI * 2,
      driftSpeed: 0.12 + seeded(i + 300) * 0.2,
      driftRadius: 0.12 + seeded(i + 400) * 0.18,
    });
  }

  // ── Feedback arc (dashed circle) ─────────────────────────────────
  const arcPts: InstanceType<typeof THREE.Vector3>[] = [];
  for (let i = 0; i <= 80; i++) {
    const t = (i / 80) * Math.PI * 1.8 - Math.PI * 0.9;
    arcPts.push(
      new THREE.Vector3(Math.cos(t) * 1.45, Math.sin(t) * 0.8, -0.05),
    );
  }
  const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPts);
  const arc = new THREE.Line(arcGeo, arcMat);
  arc.computeLineDistances();
  group.add(arc);

  // ── Connection-line pool ─────────────────────────────────────────
  const maxLines = Math.min(nodeCount * 3, 120);
  // Each line = 2 vertices × 3 components
  const linePositions = new Float32Array(maxLines * 6);
  const lineOpacities = new Float32Array(maxLines);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
  // We'll draw line segments — pairs of vertices.
  lineGeo.setDrawRange(0, 0);
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  group.add(lines);

  return {
    renderer,
    scene,
    camera,
    group,
    nodes,
    nodeData,
    linePositions,
    lineOpacities,
    lineGeo,
    lineMat,
    nodeMat,
    hubMat,
    arcMat,
    maxLines,
    rafId: 0,
    config: cfg,
    disposed: false,
  };
}

// ── Animate ──────────────────────────────────────────────────────────

/** Render a single static "composed" frame (for reduced-motion). */
export function renderStatic(state: HeroState): void {
  updatePositions(state, 2.0);
  updateConnections(state);
  state.renderer.render(state.scene, state.camera);
}

/** Start the animation loop. */
export function startLoop(state: HeroState): void {
  if (state.disposed) return;
  const loop = (): void => {
    if (state.disposed) return;
    const t = performance.now() * 0.001;
    updatePositions(state, t);
    updateConnections(state);
    // Slow rotation gives "incremental delivery" drift
    state.group.rotation.y = t * 0.04;
    state.group.rotation.x = Math.sin(t * 0.018) * 0.08;
    state.renderer.render(state.scene, state.camera);
    state.rafId = requestAnimationFrame(loop);
  };
  state.rafId = requestAnimationFrame(loop);
}

export function stopLoop(state: HeroState): void {
  cancelAnimationFrame(state.rafId);
  state.rafId = 0;
}

/** Move every node around its home position with gentle drift. */
function updatePositions(state: HeroState, t: number): void {
  const period = state.config.loopDuration;
  // Normalised cycle position 0–1 for pulse
  const cycle = (t % period) / period;

  for (let i = 0; i < state.nodes.length; i++) {
    const n = state.nodes[i]!;
    const d = state.nodeData[i]!;
    // Drift around home
    const dx = Math.sin(t * d.driftSpeed + d.driftPhase) * d.driftRadius;
    const dy =
      Math.cos(t * d.driftSpeed * 0.7 + d.driftPhase) * d.driftRadius * 0.7;
    const dz =
      Math.sin(t * d.driftSpeed * 0.4 + d.driftPhase * 2) *
      d.driftRadius *
      0.25;
    n.position.x = Math.cos(d.homeAngle) * d.homeRadius + dx;
    n.position.y = Math.sin(d.homeAngle) * d.homeRadius * 0.55 + dy;
    n.position.z = d.homeZ + dz;

    // Pulse: brighten nodes the feedback wave passes over
    const angleDist = Math.abs((d.homeAngle / (Math.PI * 2) - cycle + 1) % 1);
    const pulse = Math.max(0, 1 - angleDist * 8); // narrow bright band
    const baseMat = n.material as { opacity: number };
    baseMat.opacity =
      (i === 0 ? 0.75 : 0.55) * state.config.intensity +
      pulse * 0.3 * state.config.intensity;
  }
}

/** Rebuild connection lines based on inter-node distances. */
function updateConnections(state: HeroState): void {
  const CONNECT_DIST = 1.6;
  const { nodes, linePositions, lineGeo, maxLines, config } = state;
  let idx = 0;
  let vtx = 0;

  for (let a = 0; a < nodes.length && idx < maxLines; a++) {
    const pa = nodes[a]!.position;
    for (let b = a + 1; b < nodes.length && idx < maxLines; b++) {
      const pb = nodes[b]!.position;
      const dx = pa.x - pb.x;
      const dy = pa.y - pb.y;
      const dz = pa.z - pb.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < CONNECT_DIST) {
        linePositions[vtx] = pa.x;
        linePositions[vtx + 1] = pa.y;
        linePositions[vtx + 2] = pa.z;
        linePositions[vtx + 3] = pb.x;
        linePositions[vtx + 4] = pb.y;
        linePositions[vtx + 5] = pb.z;
        vtx += 6;
        idx++;
      }
    }
  }
  // Fade line opacity globally based on density
  (state.lineMat as { opacity: number }).opacity = 0.25 * config.intensity;

  lineGeo.setDrawRange(0, idx * 2);
  lineGeo.attributes.position!.needsUpdate = true;
}

// ── Theme update ─────────────────────────────────────────────────────

export function updateThemeColor(state: HeroState): void {
  if (state.disposed) return;
  const ink = readInkColor(document.documentElement, state.config.inkVar);
  for (const mat of [
    state.nodeMat,
    state.hubMat,
    state.lineMat,
    state.arcMat,
  ]) {
    (mat as { color: { set: (c: string) => void } }).color.set(ink);
  }
}

// ── Resize ───────────────────────────────────────────────────────────

export function resize(state: HeroState): void {
  if (state.disposed) return;
  const parent = state.config.canvas.parentElement!;
  const w = parent.offsetWidth;
  const h = parent.offsetHeight;
  (
    state.camera as { aspect: number; updateProjectionMatrix: () => void }
  ).aspect = w / h;
  (
    state.camera as { updateProjectionMatrix: () => void }
  ).updateProjectionMatrix();
  state.renderer.setSize(w, h);
}

// ── Dispose ──────────────────────────────────────────────────────────

export function dispose(state: HeroState): void {
  state.disposed = true;
  stopLoop(state);
  state.renderer.dispose();
  state.scene.traverse((obj: Object3D) => {
    const geo = (obj as { geometry?: BufferGeometry }).geometry;
    if (geo) geo.dispose();
    const mat = (obj as { material?: Material | Material[] }).material;
    if (mat) {
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
      else mat.dispose();
    }
  });
  state.renderer.forceContextLoss();
}
