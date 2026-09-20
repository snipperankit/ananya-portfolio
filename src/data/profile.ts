// Career data sourced from CV / LinkedIn. Each entry carries EN and DE copy.
import type { Lang } from "./i18n";

type Localized = { en: string; de: string };

export interface ExperienceEntry {
  period: Localized;
  role: Localized;
  company: string;
  location: Localized;
  summary: Localized;
  highlights: { en: string; de: string }[];
}

export const experience: ExperienceEntry[] = [
  {
    period: { en: "June 2023 — Present", de: "Juni 2023 — heute" },
    role: {
      en: "Project Manager - Release Train Engineer/ Scrum Master",
      de: "Projektmanagerin - Release Train Engineer/ Scrum Master",
    },
    company: "Continental ADC GmbH → AUMOVIO (spin-off)",
    location: { en: "Ulm, Germany", de: "Ulm, Deutschland" },
    summary: { en: "", de: "" },
    highlights: [
      {
        en: "Technical project leadership as Release Train Engineer, Scrum Master, and Problem Resolution Manager (Customer: Mercedes-Benz); led PI planning and tracked critical milestones across four parallel ADAS radar projects involving approximately 50 international team members.",
        de: "Technische Projektleitung als Release Train Engineer, Scrum Master und Problem Resolution Manager (Kunde: Mercedes-Benz); Leitung des PI Plannings und Verfolgung kritischer Meilensteine über vier parallele ADAS-Radar-Projekte mit rund 50 internationalen Teammitgliedern.",
      },
      {
        en: "Managed cross-functional dependencies within release and project planning; safeguarded project objectives through early escalation and resolution of risks, impediments, and critical blockers.",
        de: "Steuerung funktionsübergreifender Abhängigkeiten in der Release- und Projektplanung; Absicherung der Projektziele durch frühzeitige Eskalation und Auflösung von Risiken, Hindernissen und kritischen Blockern.",
      },
      {
        en: "Ensured realistic feature planning through capacity and resource alignment; supported project objectives through efficient resource utilisation and adherence to budget optimisation.",
        de: "Sicherstellung realistischer Feature-Planung durch Kapazitäts- und Ressourcenabgleich; Unterstützung der Projektziele durch effiziente Ressourcennutzung und Einhaltung der Budgetoptimierung.",
      },
      {
        en: "Owned problem resolution management; drove program-wide problem-report burndown and defect-resolution progress effectively across the full project lifecycle.",
        de: "Verantwortung für das Problem Resolution Management; effektive Steuerung des programmweiten Problem-Report-Burndowns und Fortschritts der Fehlerbehebung über den gesamten Projektlebenszyklus.",
      },
      {
        en: "Organised and led retrospectives, Inspect & Adapt, and problem-solving workshops; drove continuous process optimisation and coaching across the project.",
        de: "Organisation und Leitung von Retrospektiven, Inspect-&-Adapt- und Problemlösungs-Workshops; Vorantreiben kontinuierlicher Prozessoptimierung und Coaching im gesamten Projekt.",
      },
      {
        en: "Monitored requirement burndown at project level in collaboration with Software Architects and Requirements Managers; ensured requirement traceability and supported feature implementation for all Customer milestones.",
        de: "Überwachung des Requirement-Burndowns auf Projektebene in Zusammenarbeit mit Software-Architekten und Requirements Managern; Sicherstellung der Anforderungsverfolgbarkeit und Unterstützung der Feature-Umsetzung für alle Kundenmeilensteine.",
      },
      {
        en: "Developed reporting structures using Jira, eazyBI and Power BI solutions; over 60 dashboards consolidated and transparently presented delivery progress metrics to support data-driven management decisions.",
        de: "Entwicklung von Reporting-Strukturen mit Jira, eazyBI und Power BI; über 60 Dashboards konsolidierten die Lieferfortschritts-Kennzahlen und stellten sie transparent dar — als Grundlage für datenbasierte Managemententscheidungen.",
      },
    ],
  },
  {
    period: { en: "June 2022 — Apr 2023", de: "Juni 2022 — Apr. 2023" },
    role: {
      en: "Technical Account Manager (Working Student)",
      de: "Technical Account Manager (Werkstudentin)",
    },
    company: "financeAds International GmbH",
    location: { en: "Berlin, Germany", de: "Berlin, Deutschland" },
    summary: {
      en: "Affiliate marketing account management for financial-sector campaigns.",
      de: "Account-Management im Affiliate-Marketing für Kampagnen im Finanzsektor.",
    },
    highlights: [
      {
        en: "Digitalised lead generation and KPI reporting with Close CRM and Zapier — increasing reporting efficiency by 40%.",
        de: "Digitalisierung von Lead-Generierung und KPI-Reporting mit Close CRM und Zapier — Steigerung der Reporting-Effizienz um 40 %.",
      },
      {
        en: "Identified and onboarded Dutch publishers for Revolut and Santander; managed ~12 affiliate partnerships.",
        de: "Identifikation und Onboarding niederländischer Publisher für Revolut und Santander; Betreuung von rund 12 Affiliate-Partnerschaften.",
      },
      {
        en: "Ran monthly revenue reconciliations ensuring complete, accurate billing.",
        de: "Monatliche Umsatzabstimmungen zur Sicherstellung vollständiger und korrekter Abrechnungen.",
      },
    ],
  },
  {
    period: { en: "Sept 2017 — Dec 2021", de: "Sept. 2017 — Dez. 2021" },
    role: { en: "Senior Software Engineer", de: "Senior Software Engineer" },
    company: "Bosch Global Software Technologies",
    location: { en: "Bengaluru, India", de: "Bengaluru, Indien" },
    summary: {
      en: "Product lead for Networking & HMI in the iBooster project for Toyota — coordinating technical alignment across the global Japan–Germany team.",
      de: "Produktverantwortung für Networking & HMI im iBooster-Projekt für Toyota — Koordination der technischen Abstimmung im globalen Japan-Deutschland-Team.",
    },
    highlights: [
      {
        en: "On-site assignment at Toyota Motor Corporation in Japan to synchronise development of the safety-critical Remote Control Parking feature.",
        de: "Vor-Ort-Einsatz bei der Toyota Motor Corporation in Japan zur Synchronisierung der Entwicklung des sicherheitskritischen Remote-Control-Parking-Features.",
      },
      {
        en: "ASPICE-compliant development across the full SDLC — from requirements analysis to unit testing — supporting successful project audits.",
        de: "ASPICE-konforme Entwicklung über den gesamten SDLC — von der Anforderungsanalyse bis zum Unit-Test — mit erfolgreichen Projektaudits.",
      },
      {
        en: "Acted as Scrum Master and mentored junior developers in SDLC processes.",
        de: "Tätigkeit als Scrum Master und Mentoring von Junior-Entwicklern in SDLC-Prozessen.",
      },
    ],
  },
  {
    period: { en: "Jan 2017 — Apr 2017", de: "Jan. 2017 — Apr. 2017" },
    role: { en: "Project Trainee", de: "Projekt-Trainee" },
    company: "ISRO — Indian Space Research Organisation",
    location: { en: "Bengaluru, India", de: "Bengaluru, Indien" },
    summary: {
      en: "Simulation, design and testing of a buck-converter-based Solar Array Simulator, deployed for space applications.",
      de: "Simulation, Entwurf und Test eines Buck-Converter-basierten Solar-Array-Simulators, eingesetzt für Raumfahrtanwendungen.",
    },
    highlights: [],
  },
];

export interface EducationEntry {
  period: Localized;
  degree: Localized;
  school: string;
  location: Localized;
  note: Localized;
}

export const education: EducationEntry[] = [
  {
    period: { en: "Apr 2022 — Mar 2023", de: "Apr. 2022 — März 2023" },
    degree: {
      en: "MSc International Business Management",
      de: "MSc International Business Management",
    },
    school: "GISMA University of Applied Sciences",
    location: { en: "Potsdam, Germany", de: "Potsdam, Deutschland" },
    note: {
      en: "GPA 1.5",
      de: "Note 1,5",
    },
  },
  {
    period: { en: "June 2013 — Aug 2017", de: "Juni 2013 — Aug. 2017" },
    degree: {
      en: "B.E. Electronics & Communications Engineering",
      de: "B.E. Elektronik & Nachrichtentechnik",
    },
    school: "Bangalore Institute of Technology",
    location: { en: "Bengaluru, India", de: "Bengaluru, Indien" },
    note: {
      en: "First Class with Distinction.",
      de: "Abschluss mit Auszeichnung (First Class with Distinction).",
    },
  },
];

export interface Certification {
  year: number;
  name: Localized;
  issuer: string;
  icon: "pmp" | "safe" | "capm" | "ai" | "fmea";
  logo: string;
  featured?: boolean;
}

// Descending by year — newest first.
export const certifications: Certification[] = [
  {
    year: 2026,
    name: {
      en: "Project Management Professional (PMP)®",
      de: "Project Management Professional (PMP)®",
    },
    issuer: "Project Management Institute",
    icon: "pmp",
    logo: "/logos/pmi.svg",
    featured: true,
  },
  {
    year: 2026,
    name: {
      en: "Generative AI for Project Managers",
      de: "Generative AI for Project Managers",
    },
    issuer: "IBM",
    icon: "ai",
    logo: "/logos/ibm.svg",
  },
  {
    year: 2022,
    name: {
      en: "Certified SAFe® 6 Scrum Master (CSM)",
      de: "Certified SAFe® 6 Scrum Master (CSM)",
    },
    issuer: "Scaled Agile",
    icon: "safe",
    logo: "/logos/safe.svg",
    featured: true,
  },
  {
    year: 2022,
    name: {
      en: "Certified Associate in Project Management (CAPM)®",
      de: "Certified Associate in Project Management (CAPM)®",
    },
    issuer: "Project Management Institute",
    icon: "capm",
    logo: "/logos/capm.svg",
  },
  {
    year: 2021,
    name: {
      en: "Certified FMEA Specialist",
      de: "Zertifizierte FMEA-Spezialistin",
    },
    issuer: "AIGPE",
    icon: "fmea",
    logo: "/logos/aigpe.svg",
  },
];

export const aboutIntro: Record<Lang, string[]> = {
  en: [
    "Certified Project Mangement Professional, with close to 9 years of work experience in leadership, management, and a technical background in software development. Led projects for Tier-1 customers in large-scale international setups.",
  ],
  de: [
    "Zertifizierte Projektmanagement-Fachkraft mit knapp 9 Jahren Berufserfahrung in Führung, Management und einem technischen Hintergrund in der Softwareentwicklung. Leitung von Projekten für Tier-1-Kunden in groß angelegten internationalen Strukturen.",
  ],
};

export const CONTACT = {
  email: "ananyarao121996@gmail.com",
  linkedin: "https://www.linkedin.com/in/ananyarao/",
};
