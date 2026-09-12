import type { Experience } from '@/types';

export const experience: Experience[] = [
  {
    type: 'education',
    title: {
      en: "Bachelor's in Computer Engineering",
      es: 'Grado en Ingeniería Informática',
    },
    organization: 'Universidad Pública de Navarra (UPNA)',
    period: '2021 – 2026',
    description: {
      en: 'Broad foundations in software engineering, algorithms, networks, databases, and systems. Built projects across the full stack.',
      es: 'Bases sólidas en ingeniería del software, algoritmos, redes, bases de datos y sistemas. Proyectos a lo largo de todo el stack.',
    },
    tags: ['Java', 'C/C++', 'Python', 'SQL', 'Networks'],
  },
  {
    type: 'work',
    title: {
      en: 'AI Developer Intern',
      es: 'Desarrollador de IA en Prácticas',
    },
    organization: 'Industrial Augmented Reality (iAR)',
    period: 'Feb – Jun 2026',
    link: 'iar',
    description: {
      en: 'Curricular internship in the iAItech AI division. After a month of intensive training, shipped production work: voice agents for an autonomous phone AI platform, a natural-language database tool with PDF ingestion (OCR + embeddings + vector search), an AI-driven RPA with Playwright, conversation KPI analytics, and an architecture migration.',
      es: 'Prácticas curriculares en la división de IA iAItech. Tras un mes de formación intensiva, trabajo en producción: agentes de voz para una plataforma de IA telefónica autónoma, herramienta NL-to-SQL con ingesta de PDFs (OCR + embeddings + búsqueda vectorial), un RPA con IA en Playwright, analítica de KPIs de conversaciones y una migración de arquitectura.',
    },
    tags: ['TypeScript', 'Python', 'Azure', 'Docker', 'RAG', 'OCR', 'Playwright'],
  },
  {
    type: 'work',
    title: {
      en: 'AI Developer',
      es: 'Desarrollador de IA',
    },
    organization: 'Industrial Augmented Reality (iAR)',
    period: 'Jun – Sep 2026',
    description: {
      en: 'Hired on after the internship. Kept shipping features across iAItech products (LLM agents, RAG, cloud on Azure) for two months before starting the Cybersecurity Master\'s.',
      es: 'Contratado tras las prácticas. Seguí desarrollando features en los productos de iAItech (agentes LLM, RAG, cloud en Azure) durante dos meses antes de empezar el Máster de Ciberseguridad.',
    },
  },
  {
    type: 'education',
    title: {
      en: "Master's in Cybersecurity",
      es: 'Máster en Ciberseguridad',
    },
    organization: 'Universidad Pública de Navarra (UPNA)',
    period: '2026 – present',
    description: {
      en: 'Specializing in offensive and defensive security, network analysis, and security engineering.',
      es: 'Especialización en seguridad ofensiva y defensiva, análisis de redes e ingeniería de seguridad.',
    },
    tags: ['Cybersecurity', 'Networks', 'Pentesting'],
  },
];
