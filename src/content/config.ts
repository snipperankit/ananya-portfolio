import { z, defineCollection } from "astro:content";

const fontEnum = z.enum([
  "Newsreader",
  "Space Grotesk",
  "Libre Franklin",
  "Lora",
  "Playfair Display",
  "IBM Plex Mono",
]);

const alignment = z.enum(["left", "center", "right"]);

const headingBlock = z.object({
  type: z.literal("heading"),
  level: z.number().int().min(1).max(3),
  text: z.string(),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const textBlock = z.object({
  type: z.literal("text"),
  text: z.string(),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const articleBlock = z.object({
  type: z.literal("article"),
  title: z.string().optional(),
  excerpt: z.string().optional(),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const imageBlock = z.object({
  type: z.literal("image"),
  url: z.string(),
  caption: z.string().optional(),
  alt: z.string().optional(),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const galleryBlock = z.object({
  type: z.literal("gallery"),
  images: z.array(z.object({ url: z.string(), alt: z.string().optional() })),
  caption: z.string().optional(),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const videoBlock = z.object({
  type: z.literal("video"),
  url: z.string(),
  caption: z.string().optional(),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const chartDataItem = z.object({ label: z.string(), value: z.number() });
const chartBlock = z.object({
  type: z.literal("chart"),
  chartType: z.enum(["bar", "line", "pie", "stat"]),
  title: z.string().optional(),
  data: z.array(chartDataItem),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const quoteBlock = z.object({
  type: z.literal("quote"),
  text: z.string(),
  attribution: z.string().optional(),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const ctaBlock = z.object({
  type: z.literal("cta"),
  label: z.string(),
  href: z.string(),
  font: fontEnum.optional(),
  align: alignment.optional(),
});

const dividerBlock = z.object({ type: z.literal("divider") });

const blockUnion = z.discriminatedUnion("type", [
  headingBlock,
  textBlock,
  articleBlock,
  imageBlock,
  galleryBlock,
  videoBlock,
  chartBlock,
  quoteBlock,
  ctaBlock,
  dividerBlock,
]);

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string().transform((s) => s),
      eyebrow: z.string().optional(),
      font: fontEnum.optional(),
      blocks: z.array(blockUnion),
    }),
  }),
};
