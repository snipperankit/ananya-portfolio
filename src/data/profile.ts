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
      en: "Release Train Engineer · Scrum Master · Problem Resolution Manager",
      de: "Release Train Engineer · Scrum Master · Problem Resolution Manager",
    },
    company: "Continental ADC GmbH → AUMOVIO (spin-off)",
    location: { en: "Ulm, Germany", de: "Ulm, Deutschland" },
    summary: {
      en: "Served as the Release Train Engineer and Scrum Master across 4 ADAS Radar Mercedes-Benz projects. Coordinated cross-functional, international teams of ART size of 50+ in an ASPICE-regulated environment.",
      de: "Leitung von vier ADAS-/Radar-Projekten für Mercedes-Benz — Koordination internationaler, funktionsübergreifender Teams mit rund 50 Personen in einem ASPICE-regulierten Umfeld.",
    },
    highlights: [
      {
        en: "RTE for a 9-team Agile Release Train; moderated 6+ PI Planning sessions and managed cross-team dependencies to SAFe practice.",
        de: "RTE für einen Agile Release Train mit 9 Teams; Moderation von über 6 PI-Planning-Sessions und Steuerung teamübergreifender Abhängigkeiten nach SAFe.",
      },
      {
        en: "Led a globally distributed Scrum team of 12 across 5 locations; established predictable sprint deliveries.",
        de: "Führung eines global verteilten Scrum-Teams mit 12 Mitgliedern an 5 Standorten; Etablierung planbarer Sprint-Lieferungen.",
      },
      {
        en: "Designed 50+ eazyBI and Power BI dashboards for ART-wide tracking of feature completion, ticket burndown, risks and impediments.",
        de: "Konzeption von über 50 eazyBI- und Power-BI-Dashboards für das ART-weite Tracking von Feature-Fertigstellung, Ticket-Burndown, Risiken und Hindernissen.",
      },
      {
        en: "Streamlined ASPICE assessment preparation (MAN.3, SWE.3, SWE.4, SUP.9) leading to successful audits.",
        de: "Strukturierte Vorbereitung der ASPICE-Assessments (MAN.3, SWE.3, SWE.4, SUP.9) mit erfolgreichen Audits.",
      },
      {
        en: "Drove effective Problem Report burndown across the ART towards project milestones.",
        de: "Effektiver Problem-Report-Burndown über den gesamten ART hinweg, ausgerichtet auf Projektmeilensteine.",
      },
      {
        en: "Moderated agile ceremonies across multiple Scrum teams and established standardised ways of working.",
        de: "Moderation agiler Zeremonien über mehrere Scrum-Teams hinweg und Etablierung standardisierter Arbeitsprozesse.",
      },
      {
        en: "Facilitated retrospectives and Inspect & Adapt workshops; coached teams on continuous improvement.",
        de: "Durchführung von Retrospektiven und Inspect-&-Adapt-Workshops; Coaching der Teams zu kontinuierlicher Verbesserung.",
      },
      {
        en: "Collaborated closely with Product Owners on backlog prioritisation, schedule analysis and user stories.",
        de: "Enge Zusammenarbeit mit den Product Ownern bei Backlog-Priorisierung, Terminanalysen und User Stories.",
      },
    ],
  },
  {
    period: { en: "June 2022 — Apr 2023", de: "Juni 2022 — Apr. 2023" },
    role: {
      en: "Working Student — Junior Account Manager",
      de: "Werkstudentin — Junior Account Managerin",
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
    period: { en: "Jan 2020 — Dec 2021", de: "Jan. 2020 — Dez. 2021" },
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
    period: { en: "Sept 2017 — Jan 2020", de: "Sept. 2017 — Jan. 2020" },
    role: {
      en: "Associate Software Engineer",
      de: "Associate Software Engineer",
    },
    company: "Bosch Global Software Technologies",
    location: { en: "Bengaluru, India", de: "Bengaluru, Indien" },
    summary: {
      en: "Embedded software development for automotive braking systems (iBooster, projects 412B/403B).",
      de: "Embedded-Softwareentwicklung für automobile Bremssysteme (iBooster, Projekte 412B/403B).",
    },
    highlights: [
      {
        en: "Independently developed the AUTOSAR Network Management feature and On-Board Diagnostics for project 403B — with direct design presentations to the customer.",
        de: "Eigenständige Entwicklung des AUTOSAR-Network-Management-Features und der On-Board-Diagnose für Projekt 403B — mit direkten Design-Präsentationen beim Kunden.",
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
      en: "GPA 1.5 · Thesis: challenges a Scrum Master faces in scaling agile frameworks (SAFe, Disciplined Agile, LeSS, Spotify) in the automotive industry.",
      de: "Note 1,5 · Thesis: Herausforderungen eines Scrum Masters in skalierten agilen Frameworks (SAFe, Disciplined Agile, LeSS, Spotify) in der Automobilindustrie.",
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
    "Certified SAFe 6 CSM and PMP Professional, with close to 9 years of work experience in Agile leadership, management, and a technical background in software development. Led project teams in large-scale agile environments of international cross-functional teams.",
  ],
  de: [
    "Zertifizierte SAFe-6-CSM- und PMP-Fachkraft mit knapp 9 Jahren Berufserfahrung in agiler Führung, Management und einem technischen Hintergrund in der Softwareentwicklung. Leitung von Projektteams in skalierten agilen Umgebungen mit internationalen, funktionsübergreifenden Teams.",
  ],
};

export const CONTACT = {
  email: "ananyarao121996@gmail.com",
  linkedin: "https://www.linkedin.com/in/ananyarao/",
};
