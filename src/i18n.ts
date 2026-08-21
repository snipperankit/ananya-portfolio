// Lightweight i18n: EN is served at /, DE under /de.
export type Lang = "en" | "de";

export function localizePath(lang: Lang, path: string): string {
  if (lang !== "de") return path;
  return path === "/" ? "/de" : `/de${path}`;
}

export const ui = {
  en: {
    nav: {
      caseStudies: "Case Studies",
      insights: "Insights",
      about: "About",
      contact: "Contact",
    },
    langSwitch: "Deutsch",
    home: {
      eyebrow: "Project Management Specialist · RTE · Scrum Master",
      headline:
        "Steering large-scale international projects from predictable planning to value delivery.",
      btnCaseStudies: "Case Studies",
      btnInsights: "Insights",
      statYearsValue: "9+",
      statYearsLabel: "Years of experience",
      statArtValue: "~60",
      statArtLabel: "ART size (people)",
      statCustomersValue: "Mercedes-Benz · Toyota · Revolut",
      statCustomersLabel: "Key customers",
      certsLabel: "Certifications",
      selectedEyebrow: "Selected work",
      selectedTitle: "Case studies with outcomes",
      read: "Read →",
      ctaTitle: "Let's get your delivery on track",
      ctaBody:
        "Looking for a Scrum Master or Release Train Engineer who leaves teams running better than they found them? I'm open to new opportunities.",
      ctaButton: "Get in touch",
    },
    caseStudies: {
      eyebrow: "Portfolio",
      title: "Case Studies",
      intro:
        "Agile transformations, delivery improvements, and team coaching — each documented with the measurable outcome it produced.",
      readMore: "Read more →",
      skillsLabel: "Skills",
    },
    insights: {
      eyebrow: "Insights",
      title: "Insights",
      intro:
        "Perspectives and stories from the field — scaled agile, delivery metrics, and leading international teams.",
      readMore: "Read more →",
    },
    about: {
      title: "About me",
      role: "Project Management Specialist · RTE · Scrum Master",
      visaLabel: "Visa",
      visaValue: "Permanent Residency",
      languagesLabel: "Languages",
      languagesValue: "English C1 · German B2",
      basedIn: "Based in",
      basedInValue: "Ulm, Germany",
      certifiedLabel: "Certified",
      experienceTitle: "Work experience",
      educationTitle: "Education",
      certificationsTitle: "Certifications",
      certificationsHint: "In chronological order",
    },
    contactToast: {
      title: "Get in touch",
      body: "The fastest ways to reach me:",
      linkedin: "LinkedIn — linkedin.com/in/ananyarao",
      email: "ananyarao121996@gmail.com",
      close: "Close",
    },
    footer: {
      role: "Project Management Specialist",
      impressum: "Legal Notice",
      email: "Email",
    },
  },
  de: {
    nav: {
      caseStudies: "Fallstudien",
      insights: "Insights",
      about: "Über mich",
      contact: "Kontakt",
    },
    langSwitch: "English",
    home: {
      eyebrow: "Projektmanagement-Spezialistin · RTE · Scrum Master",
      headline:
        "Internationale Großprojekte steuern — von verlässlicher Planung bis zur messbaren Wertlieferung.",
      btnCaseStudies: "Fallstudien",
      btnInsights: "Insights",
      statYearsValue: "9+",
      statYearsLabel: "Jahre Berufserfahrung",
      statArtValue: "~60",
      statArtLabel: "ART-Größe (Personen)",
      statCustomersValue: "Mercedes-Benz · Toyota · Revolut",
      statCustomersLabel: "Kunden (Auswahl)",
      certsLabel: "Zertifizierungen",
      selectedEyebrow: "Ausgewählte Arbeiten",
      selectedTitle: "Fallstudien mit messbaren Ergebnissen",
      read: "Lesen →",
      ctaTitle: "Bringen wir Ihre Delivery auf Kurs",
      ctaBody:
        "Sie suchen eine Scrum Masterin oder Release Train Engineerin, die Teams besser hinterlässt, als sie sie vorgefunden hat? Ich bin offen für neue Aufgaben.",
      ctaButton: "Kontakt aufnehmen",
    },
    caseStudies: {
      eyebrow: "Portfolio",
      title: "Fallstudien",
      intro:
        "Agile Transformationen, Verbesserungen in der Delivery und Team-Coaching — jeweils dokumentiert mit dem messbaren Ergebnis.",
      readMore: "Weiterlesen →",
      skillsLabel: "Kompetenzen",
    },
    insights: {
      eyebrow: "Insights",
      title: "Insights",
      intro:
        "Perspektiven und Erfahrungen aus der Praxis — skalierte agile Frameworks, Delivery-Kennzahlen und die Führung internationaler Teams.",
      readMore: "Weiterlesen →",
    },
    about: {
      title: "Über mich",
      role: "Projektmanagement-Spezialistin · RTE · Scrum Master",
      visaLabel: "Visum",
      visaValue: "Niederlassungserlaubnis",
      languagesLabel: "Sprachen",
      languagesValue: "Englisch C1 · Deutsch B2",
      basedIn: "Wohnort",
      basedInValue: "Ulm, Deutschland",
      certifiedLabel: "Zertifiziert",
      experienceTitle: "Berufserfahrung",
      educationTitle: "Ausbildung",
      certificationsTitle: "Zertifizierungen",
      certificationsHint: "In chronologischer Reihenfolge",
    },
    contactToast: {
      title: "Kontakt aufnehmen",
      body: "So erreichen Sie mich am schnellsten:",
      linkedin: "LinkedIn — linkedin.com/in/ananyarao",
      email: "ananyarao121996@gmail.com",
      close: "Schließen",
    },
    footer: {
      role: "Projektmanagement-Spezialistin",
      impressum: "Impressum",
      email: "E-Mail",
    },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
