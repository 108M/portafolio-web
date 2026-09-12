import type { LocalizedString } from '@/types';

interface Task {
  title: LocalizedString;
  description: LocalizedString;
  stack: string[];
}

export const internship = {
  slug: 'iar',
  company: 'Industrial Augmented Reality (iAR)',
  companyUrl: 'https://www.iar-soft.com/',
  location: 'Pamplona, Navarra',
  division: 'iAItech',
  period: 'Feb – Sep 2026',
  role: {
    en: 'AI Developer',
    es: 'Desarrollador de IA',
  } as LocalizedString,
  roleProgression: {
    en: 'Internship → Contractor',
    es: 'Prácticas → Contrato',
  } as LocalizedString,
  summary: {
    en: "Curricular internship in iAR's applied-AI division (iAItech), later hired for two months. Shipped production AI features across the company's core products before starting the Cybersecurity Master's.",
    es: 'Prácticas curriculares en la división de IA aplicada de iAR (iAItech), con contratación posterior de dos meses. Trabajo en producción con IA en los productos clave de la empresa antes de empezar el Máster de Ciberseguridad.',
  } as LocalizedString,
  context: {
    en: "iAR is a ~30-person Industry 4.0 company in Pamplona. Its iAItech division builds applied AI: natural-language database tools, autonomous phone agents and process automation. The first month was intensive training on AI agents, RAG, embeddings, vector databases, OCR and the Azure/Docker/GitHub Actions stack; the rest was production work with real clients and deadlines.",
    es: 'iAR es una empresa de Industria 4.0 de ~30 personas en Pamplona. Su división iAItech desarrolla IA aplicada: herramientas de consulta a bases de datos en lenguaje natural, agentes telefónicos autónomos y automatización de procesos. El primer mes fue formación intensiva en agentes de IA, RAG, embeddings, bases de datos vectoriales, OCR y el stack Azure/Docker/GitHub Actions; el resto, trabajo en producción con clientes y plazos reales.',
  } as LocalizedString,
  tasks: [
    {
      title: {
        en: 'Autonomous phone AI voice agents',
        es: 'Agentes de voz para IA telefónica autónoma',
      },
      description: {
        en: "Designed conversational flows for the company's autonomous phone AI platform — prompts, conversation state and conditional responses — and tuned NLP to understand intent on noisy, colloquial calls. Iterated on configurations and documented which patterns produced the best appointment-completion rates.",
        es: 'Diseño de flujos conversacionales para la plataforma de IA telefónica autónoma de la empresa — prompts, estados de conversación y respuestas condicionales — y ajuste de PLN para entender la intención en llamadas con ruido y lenguaje coloquial. Iteración sobre configuraciones y documentación de los patrones con mejores tasas de cierre de cita.',
      },
      stack: ['TypeScript', 'Azure Cognitive Services', 'NLP'],
    },
    {
      title: {
        en: 'Natural-language query tool with document processing',
        es: 'Herramienta NL-to-SQL con procesamiento documental',
      },
      description: {
        en: "Extended the company's natural-language database query tool for a client needing PDF extraction: an ingestion pipeline (image preprocessing, OCR), text cleanup and structuring, embedding generation into a vector database for semantic search, and integration so users could ask questions mixing SQL data with PDF content.",
        es: 'Extensión de la herramienta de consultas a BD en lenguaje natural de la empresa para un cliente que necesitaba extracción desde PDFs: pipeline de ingesta (preprocesado de imagen, OCR), limpieza y estructuración del texto, generación de embeddings a una base de datos vectorial para búsqueda semántica, e integración para preguntar combinando datos SQL y contenido de los PDFs.',
      },
      stack: ['Python', 'TypeScript', 'Docker', 'Vector DBs', 'Embeddings', 'OCR'],
    },
    {
      title: {
        en: 'AI-driven RPA',
        es: 'RPA con IA',
      },
      description: {
        en: 'Developed an RPA that navigates the web autonomously: interpreting a goal, breaking it into atomic steps, interacting with web elements, using AI for decisions, plus fault tolerance (retries, UI-change detection, audit logs).',
        es: 'Desarrollo de un RPA que navega la web de forma autónoma: interpreta un objetivo, lo descompone en pasos atómicos, interactúa con elementos web, usa IA para decidir, con tolerancia a fallos (reintentos, detección de cambios de UI, logs de auditoría).',
      },
      stack: ['Python', 'Playwright', 'Docker'],
    },
    {
      title: {
        en: 'Conversational AI KPI analytics',
        es: 'Analítica de KPIs de IA conversacional',
      },
      description: {
        en: 'Built a conversation-log analytics module extracting key metrics (query success rate, resolution time, drop-off points, common question types) with dashboards, and surfaced recurring failure patterns to guide product improvements.',
        es: 'Módulo de analítica de logs de conversación que extrae métricas clave (tasa de éxito, tiempo de resolución, puntos de abandono, tipos de pregunta) con dashboards, y detección de patrones de fallo recurrentes para guiar mejoras del producto.',
      },
      stack: ['Python', 'TypeScript', 'Azure'],
    },
    {
      title: {
        en: 'Architecture migration',
        es: 'Migración de arquitectura',
      },
      description: {
        en: "Migrated an existing product to the company's new, more scalable architecture — analysing legacy code, reimplementing modules, integration testing to guarantee identical behaviour, and documenting decisions.",
        es: 'Migración de un producto a la nueva arquitectura más escalable de la empresa — análisis del código legacy, reimplementación de módulos, testing de integración para garantizar el mismo comportamiento y documentación de decisiones.',
      },
      stack: ['TypeScript', 'Python', 'Docker', 'GitHub Actions'],
    },
    {
      title: {
        en: 'Testing & QA',
        es: 'Testing y QA',
      },
      description: {
        en: 'Ran manual and exploratory testing across apps and AI agents, reporting issues with clear reproduction steps in Azure DevOps.',
        es: 'Testing manual y exploratorio de apps y agentes de IA, con reporte de incidencias y pasos de reproducción claros en Azure DevOps.',
      },
      stack: ['Azure DevOps'],
    },
  ] as Task[],
  competencies: {
    en: [
      'Conversational voice & text agents',
      'RAG systems',
      'OCR document processing',
      'Embeddings & vector databases',
      'Web automation with Playwright',
      'Azure cloud integration',
      'Git & GitHub Actions CI/CD',
    ],
    es: [
      'Agentes conversacionales de voz y texto',
      'Sistemas RAG',
      'Procesamiento documental con OCR',
      'Embeddings y bases de datos vectoriales',
      'Automatización web con Playwright',
      'Integración cloud en Azure',
      'CI/CD con Git y GitHub Actions',
    ],
  },
  stack: ['TypeScript', 'Python', 'Azure', 'Docker', 'RAG', 'Embeddings', 'Vector DBs', 'OCR', 'Playwright', 'GitHub Actions', 'NLP'],
};
