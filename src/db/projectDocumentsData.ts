export interface ProjectDocument {
  id: number
  projectId: number
  thumbnailUrl: string
  documentUrl: string
  title: {
    es: string
    en: string
    fr: string
    it: string
  }
  description: {
    es: string
    en: string
    fr: string
    it: string
  }
}

export const projectDocumentsData: ProjectDocument[] = [
  {
    id: 1,
    projectId: 1,
    thumbnailUrl: '/img/project/01.jpg',
    documentUrl: '/documents/project-017FCAT25-technical-report.pdf',
    title: {
      es: 'Informe Técnico del Proyecto',
      en: 'Project Technical Report',
      fr: 'Rapport Technique du Projet',
      it: 'Relazione Tecnica del Progetto'
    },
    description: {
      es: 'Documento técnico completo con especificaciones del proyecto fotovoltaico y sistema BESS',
      en: 'Complete technical document with photovoltaic project and BESS system specifications',
      fr: 'Document technique complet avec les spécifications du projet photovoltaïque et du système BESS',
      it: 'Documento tecnico completo con le specifiche del progetto fotovoltaico e del sistema BESS'
    }
  },
  {
    id: 2,
    projectId: 2,
    thumbnailUrl: '/img/project/02.jpg',
    documentUrl: '/documents/project-013FCAT25-technical-report.pdf',
    title: {
      es: 'Informe Técnico del Proyecto',
      en: 'Project Technical Report',
      fr: 'Rapport Technique du Projet',
      it: 'Relazione Tecnica del Progetto'
    },
    description: {
      es: 'Documentación técnica detallada del proyecto de energía renovable',
      en: 'Detailed technical documentation of the renewable energy project',
      fr: 'Documentation technique détaillée du projet d\'énergie renouvelable',
      it: 'Documentazione tecnica dettagliata del progetto di energia rinnovabile'
    }
  },
  {
    id: 3,
    projectId: 3,
    thumbnailUrl: '/img/project/03.jpg',
    documentUrl: '/documents/project-011FCAT25-technical-report.pdf',
    title: {
      es: 'Informe Técnico del Proyecto',
      en: 'Project Technical Report',
      fr: 'Rapport Technique du Projet',
      it: 'Relazione Tecnica del Progetto'
    },
    description: {
      es: 'Especificaciones técnicas y análisis de viabilidad del proyecto',
      en: 'Technical specifications and project feasibility analysis',
      fr: 'Spécifications techniques et analyse de faisabilité du projet',
      it: 'Specifiche tecniche e analisi di fattibilità del progetto'
    }
  },
  {
    id: 4,
    projectId: 4,
    thumbnailUrl: '/img/project/04.jpg',
    documentUrl: '/documents/project-012FCAT25-technical-report.pdf',
    title: {
      es: 'Informe Técnico del Proyecto',
      en: 'Project Technical Report',
      fr: 'Rapport Technique du Projet',
      it: 'Relazione Tecnica del Progetto'
    },
    description: {
      es: 'Documentación completa del proyecto fotovoltaico',
      en: 'Complete photovoltaic project documentation',
      fr: 'Documentation complète du projet photovoltaïque',
      it: 'Documentazione completa del progetto fotovoltaico'
    }
  },
  {
    id: 5,
    projectId: 5,
    thumbnailUrl: '/img/project/05.jpg',
    documentUrl: '/documents/project-021FCAT25-technical-report.pdf',
    title: {
      es: 'Informe Técnico del Proyecto',
      en: 'Project Technical Report',
      fr: 'Rapport Technique du Projet',
      it: 'Relazione Tecnica del Progetto'
    },
    description: {
      es: 'Informe técnico y estudios de impacto ambiental',
      en: 'Technical report and environmental impact studies',
      fr: 'Rapport technique et études d\'impact environnemental',
      it: 'Relazione tecnica e studi di impatto ambientale'
    }
  }
]
