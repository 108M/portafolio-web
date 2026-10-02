import type { Lang, LocalizedString } from '@/types';

// Data used only by the printable CV (/cv, /es/cv → public/cv/*.pdf).
// Regenerate the PDFs after editing: `npm run cv`.

interface CvRole {
  title: LocalizedString;
  organization: string;
  location: string;
  period: LocalizedString;
  bullets: { en: string[]; es: string[] };
}

interface CvEducation {
  title: LocalizedString;
  organization: string;
  location: string;
  period: LocalizedString;
  detail?: LocalizedString;
}

export const cv = {
  name: 'Markel Álvarez Alonso',
  headline: {
    en: 'Software Engineer & Cybersecurity',
    es: 'Ingeniero de Software & Ciberseguridad',
  } as LocalizedString,
  contact: {
    phone: '+34 717 701 874',
    email: 'alvarezalonsomarkel@gmail.com',
    location: { en: 'Pamplona, Spain', es: 'Pamplona, Navarra' } as LocalizedString,
    linkedin: 'linkedin.com/in/markel-alvarez-alonso-65013a360',
    github: 'github.com/108M',
    website: 'markel108.dev',
  },
  summary: {
    en: "Computer Engineer (UPNA) currently studying a Master's in Cybersecurity. Professional experience building production AI systems — LLM voice agents, RAG with OCR and vector search, AI-driven web automation — on Azure, Docker and GitHub Actions. Hands-on security projects in OT/ICS (IEC 62443, Suricata, MITRE ATT&CK) and DevSecOps.",
    es: 'Ingeniero Informático (UPNA) cursando el Máster en Ciberseguridad. Experiencia profesional desarrollando sistemas de IA en producción — agentes de voz con LLM, RAG con OCR y búsqueda vectorial, automatización web con IA — sobre Azure, Docker y GitHub Actions. Proyectos prácticos de seguridad OT/ICS (IEC 62443, Suricata, MITRE ATT&CK) y DevSecOps.',
  } as LocalizedString,
  experience: [
    {
      title: { en: 'AI Software Engineer', es: 'AI Software Engineer' },
      organization: 'Industrial Augmented Reality (iAR) — iAItech',
      location: 'Pamplona',
      period: { en: 'Jun 2026 – Sep 2026', es: 'Jun 2026 – Sep 2026' },
      bullets: {
        en: [
          'Hired after the internship to keep shipping production features across iAItech products: LLM agents, RAG pipelines and Azure cloud services.',
          'Owned features end to end — implementation, integration testing, Docker deployment and CI/CD with GitHub Actions — working with real clients and deadlines.',
        ],
        es: [
          'Contratado tras las prácticas: nuevas funcionalidades en producción de iAItech con agentes LLM, RAG y Azure.',
          'Responsable de funcionalidades de principio a fin — implementación, tests de integración, despliegue con Docker y CI/CD con GitHub Actions — con clientes y plazos reales.',
        ],
      },
    },
    {
      title: { en: 'AI Developer (Intern)', es: 'Desarrollador de IA (Prácticas)' },
      organization: 'Industrial Augmented Reality (iAR) — iAItech',
      location: 'Pamplona',
      period: { en: 'Feb 2026 – Jun 2026', es: 'Feb 2026 – Jun 2026' },
      bullets: {
        en: [
          'Designed conversational flows (prompts, state, conditional responses) for an autonomous phone AI platform and tuned NLP for noisy, colloquial calls (TypeScript, Azure Cognitive Services).',
          'Extended a natural-language-to-SQL tool with PDF ingestion: image preprocessing, OCR, embeddings into a vector database and semantic search combined with SQL data (Python, Docker).',
          'Built an AI-driven RPA with Playwright that breaks a goal into steps and navigates the web autonomously, with retries, UI-change detection and audit logs.',
          'Developed a KPI analytics module for conversation logs (success rate, resolution time, drop-off points) with dashboards to guide product improvements.',
          'Migrated an existing product to a new scalable architecture, with integration tests guaranteeing identical behaviour; reported QA issues in Azure DevOps.',
        ],
        es: [
          'Diseño de flujos conversacionales (prompts, estados, respuestas condicionales) para una plataforma de IA telefónica autónoma y ajuste de PLN para llamadas con ruido y lenguaje coloquial (TypeScript, Azure Cognitive Services).',
          'Ampliación de una herramienta de lenguaje natural a SQL con ingesta de PDFs: preprocesado de imagen, OCR, embeddings en base de datos vectorial y búsqueda semántica combinada con datos SQL (Python, Docker).',
          'Desarrollo de un RPA con IA en Playwright que descompone un objetivo en pasos y navega la web de forma autónoma, con reintentos, detección de cambios de UI y logs de auditoría.',
          'Módulo de analítica de KPIs sobre logs de conversación (tasa de éxito, tiempo de resolución, puntos de abandono) con dashboards para guiar mejoras de producto.',
          'Migración de un producto a una nueva arquitectura escalable, con tests de integración que garantizan el mismo comportamiento; reporte de incidencias de QA en Azure DevOps.',
        ],
      },
    },
  ] as CvRole[],
  education: [
    {
      title: { en: "Master's Degree in Cybersecurity", es: 'Máster Universitario en Ciberseguridad' },
      organization: 'Universidad Pública de Navarra (UPNA)',
      location: 'Pamplona',
      period: { en: 'Sep 2026 – Present', es: 'Sep 2026 – Actualidad' },
      detail: {
        en: 'Offensive and defensive security, network analysis and security engineering.',
        es: 'Seguridad ofensiva y defensiva, análisis de redes e ingeniería de seguridad.',
      },
    },
    {
      title: { en: "Bachelor's Degree in Computer Engineering", es: 'Grado en Ingeniería Informática' },
      organization: 'Universidad Pública de Navarra (UPNA)',
      location: 'Pamplona',
      period: { en: '2021 – 2026', es: '2021 – 2026' },
      detail: {
        en: 'Thesis: "The AI Paradigm Applied to Software Development: Research on AI-Based Methodologies and Tools to Enrich the Development Lifecycle". Includes a multimodal chatbot prototype (React, FastAPI, OpenAI, ElevenLabs).',
        es: 'TFG: «Paradigma de la IA aplicada al desarrollo de software: Investigación sobre metodologías y herramientas basadas en IA para enriquecer el ciclo de desarrollo». Incluye un prototipo de chatbot multimodal (React, FastAPI, OpenAI, ElevenLabs).',
      },
    },
  ] as CvEducation[],
  // Slugs from projects.ts, in display order
  projects: ['laboratorio-ot-ics', 'pipeline-devsecops', 'todo-uni'],
  // How many feature bullets to show per project
  projectBullets: 2,
  skills: [
    {
      label: { en: 'Languages', es: 'Lenguajes' },
      items: 'Python, TypeScript, JavaScript, C, Java, SQL, Bash',
    },
    {
      label: { en: 'Frameworks', es: 'Frameworks' },
      items: 'React, Next.js, Node.js, FastAPI, React Native, Expo, Tailwind CSS',
    },
    {
      label: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
      items: 'Azure, Docker, Git, GitHub Actions, CI/CD, Linux, PostgreSQL, Supabase, Firebase, Azure DevOps',
    },
    {
      label: { en: 'AI & Data', es: 'IA y datos' },
      items: 'LLM, RAG, Embeddings, Vector DBs, OCR, NLP, OpenAI API, ElevenLabs, Playwright (RPA)',
    },
    {
      label: { en: 'Security', es: 'Seguridad' },
      items: 'DevSecOps, Suricata IDS, MITRE ATT&CK for ICS, IEC 62443, Modbus TCP, nftables, Wireshark, nmap',
    },
  ] as { label: LocalizedString; items: string }[],
  languages: [
    { name: { en: 'Spanish', es: 'Castellano' }, level: { en: 'Native', es: 'Nativo' } },
    { name: { en: 'Basque', es: 'Euskera' }, level: { en: 'Native', es: 'Nativo' } },
    {
      name: { en: 'English', es: 'Inglés' },
      level: {
        en: 'Advanced — professional working proficiency (B2 certified)',
        es: 'Avanzado — competencia profesional (certificado B2)',
      },
    },
  ] as { name: LocalizedString; level: LocalizedString }[],
};

export const cvFileName = (lang: Lang) =>
  `Markel-Alvarez-Alonso-CV-${lang.toUpperCase()}.pdf`;

export const cvHref = (lang: Lang) => `/cv/${cvFileName(lang)}`;
