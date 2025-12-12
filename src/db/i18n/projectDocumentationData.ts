export interface ProjectDocumentationI18nData {
  pageTitle: {
    es: string
    en: string
    fr: string
    it: string
  }
  projectLabel: {
    es: string
    en: string
    fr: string
    it: string
  }
  documentationTitle: {
    es: string
    en: string
    fr: string
    it: string
  }
  tableHeaders: {
    preview: {
      es: string
      en: string
      fr: string
      it: string
    }
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
  noDocuments: {
    es: string
    en: string
    fr: string
    it: string
  }
  backToProjects: {
    es: string
    en: string
    fr: string
    it: string
  }
}

export const projectDocumentationI18nData: ProjectDocumentationI18nData = {
  pageTitle: {
    es: 'Documentación del Proyecto',
    en: 'Project Documentation',
    fr: 'Documentation du Projet',
    it: 'Documentazione del Progetto'
  },
  projectLabel: {
    es: 'Proyecto',
    en: 'Project',
    fr: 'Projet',
    it: 'Progetto'
  },
  documentationTitle: {
    es: 'Documentación Disponible',
    en: 'Available Documentation',
    fr: 'Documentation Disponible',
    it: 'Documentazione Disponibile'
  },
  tableHeaders: {
    preview: {
      es: 'Vista Previa',
      en: 'Preview',
      fr: 'Aperçu',
      it: 'Anteprima'
    },
    title: {
      es: 'Título',
      en: 'Title',
      fr: 'Titre',
      it: 'Titolo'
    },
    description: {
      es: 'Descripción',
      en: 'Description',
      fr: 'Description',
      it: 'Descrizione'
    }
  },
  noDocuments: {
    es: 'No hay documentación disponible para este proyecto',
    en: 'No documentation available for this project',
    fr: 'Aucune documentation disponible pour ce projet',
    it: 'Nessuna documentazione disponibile per questo progetto'
  },
  backToProjects: {
    es: 'Volver a la lista de proyectos',
    en: 'Back to projects list',
    fr: 'Retour à la liste des projets',
    it: 'Torna all\'elenco dei progetti'
  }
}
