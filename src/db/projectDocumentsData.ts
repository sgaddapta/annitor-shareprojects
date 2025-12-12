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
    thumbnailUrl: 'https://storage.googleapis.com/annitor-lista-documentos/017FCAT25/proyecto-granollers.png',
    documentUrl: 'https://storage.googleapis.com/annitor-lista-documentos/017FCAT25/240717_Proyecto_PFV_GRANOLLERS-1.pdf',
    title: {
      es: 'Informe Técnico del Proyecto',
      en: 'Project Technical Report',
      fr: 'Rapport Technique du Projet',
      it: 'Relazione Tecnica del Progetto'
    },
    description: {
      es: 'La memoria describe el diseño y justificación de una planta solar fotovoltaica de 4 MW ubicada en suelo no urbanizable de Granollers, destinada a inyectar energía a la red de distribución. El proyecto contempla la instalación de 7.574 módulos fotovoltaicos bifaciales de 660 Wp sobre seguidores a un eje, organizados en 541 strings conectados a 32 inversores de 125 kW, ocupando una superficie aproximada de 9,48 ha, con 5,16 ha efectivas de captación. Se analiza el recurso solar (≈4,35 kWh/m²/día), las condiciones del emplazamiento, los accesos y la normativa aplicable en electricidad, obra civil, seguridad y medio ambiente. El documento define la disposición del campo solar, la infraestructura eléctrica de evacuación, cimentaciones, canalizaciones, vallado perimetral, vida útil y procedimientos de pruebas y puesta en servicio. También incluye anexos con cálculos, cronograma, fichas técnicas, estudios topográficos, evaluación de impacto ambiental y viabilidad técnico-económica, estableciendo las bases para la construcción, explotación y desmantelamiento final de la planta.',
      en: 'The document describes the design and justification of the 4 MW Granollers-1 photovoltaic plant, located on non-urban land in Granollers and intended to inject electricity into the distribution grid. The project includes the installation of 7,574 bifacial 660 Wp modules mounted on single-axis trackers, arranged into 541 strings connected to 32 inverters of 125 kW, across a total area of approximately 9.48 ha, with 5.16 ha effectively used for solar capture. It evaluates the solar resource (≈4.35 kWh/m²/day), site conditions, land access, and all applicable regulations related to electrical infrastructure, civil works, safety, and environmental protection. The report defines the layout of the PV field, the energy evacuation system, foundations, cable trenches, perimeter fencing, useful life, and testing and commissioning procedures. Annexes include technical datasheets, calculations, a construction schedule, topographic and geotechnical studies, environmental impact considerations, and a techno-economic feasibility assessment, establishing the framework for the construction, operation, and eventual dismantling of the plant.',
      fr: 'Le document présente la conception et la justification de la centrale photovoltaïque Granollers-1 de 4 MW, implantée sur un terrain non urbanisable à Granollers et destinée à injecter l’électricité produite dans le réseau de distribution. Le projet prévoit l’installation de 7 574 modules bifaciaux de 660 Wp montés sur des suiveurs à un axe, organisés en 541 chaînes raccordées à 32 onduleurs de 125 kW, sur une superficie totale d’environ 9,48 ha, dont 5,16 ha effectivement dédiées à la captation solaire. L’étude analyse le gisement solaire (≈4,35 kWh/m²/jour), les conditions du site, les accès et la réglementation applicable en matière d’infrastructures électriques, de génie civil, de sécurité et d’environnement. Le rapport décrit la configuration du champ photovoltaïque, le système d’évacuation de l’énergie, les fondations, les tranchées de câbles, la clôture périmétrique, la durée de vie prévue ainsi que les procédures d’essais et de mise en service. Les annexes incluent des fiches techniques, des calculs, un planning de construction, des études topographiques et géotechniques, l’analyse de l’impact environnemental et l’évaluation technico-économique, établissant le cadre pour la construction, l’exploitation et le démantèlement futur de l’installation.'
    }
  },
  {
    id: 11,
    projectId: 1,
    thumbnailUrl: 'https://storage.googleapis.com/annitor-lista-documentos/017FCAT25/Cronologia-granollers.png',
    documentUrl: 'https://storage.googleapis.com/annitor-lista-documentos/017FCAT25/240717_Proyecto_PFV_GRANOLLERS-Cronologia.pdf',
    title: {
      es: 'Cronología del proyecto',
      en: 'Project timeline',
      fr: 'Chronologie du projet',
      it: 'Cronologia del progetto'
    },
    description: {
      es: 'El cronograma del proyecto fotovoltaico Granollers-1 (4 MW) detalla la secuencia de trabajos desde la preparación del terreno hasta la puesta en marcha final. Las tareas iniciales incluyen el acondicionamiento del terreno, la construcción de viales y la ejecución de zanjas y canalizaciones. Paralelamente se reciben paneles, seguidores, inversores, centros de transformación y sistemas de almacenamiento. La fase de montaje abarca la instalación de seguidores, paneles, cableado en CC y CA, inversores, centros de transformación y baterías. Posteriormente se instalan los sistemas de control, vigilancia e iluminación. Finalmente, se realizan las pruebas de funcionamiento y se ejecuta la puesta en marcha, completando el proyecto según la planificación semanal establecida.',
      en: 'The schedule for the Granollers-1 (4 MW) photovoltaic project outlines the full sequence of activities from land preparation to final commissioning. Initial tasks include site clearing, construction of access roads, and excavation of trenches and cable routes. In parallel, photovoltaic panels, trackers, inverters, transformer stations, and battery storage systems are delivered. The installation phase covers the assembly of trackers, panel mounting, DC and AC cabling, inverter integration, transformer station installation, and setup of storage units. This is followed by the installation of control, monitoring, lighting, and security systems. The project concludes with functional testing and final commissioning according to the defined week-by-week timeline.',
      fr: 'Le planning du projet photovoltaïque Granollers-1 (4 MW) présente la séquence complète des travaux, depuis la préparation du terrain jusqu’à la mise en service finale. Les premières étapes comprennent le débroussaillage, la construction des voies d’accès et l’excavation des tranchées pour les câbles. Parallèlement, les panneaux photovoltaïques, les suiveurs, les onduleurs, les centres de transformation et les systèmes de stockage sont livrés. La phase de montage inclut l’installation des suiveurs, la pose des panneaux, le câblage en CC et en CA, l’intégration des onduleurs, la mise en place des centres de transformation et l’installation des batteries. Ensuite, les systèmes de contrôle, de surveillance et d’éclairage sont installés. Le projet se termine par les essais de fonctionnement puis la mise en service, selon le calendrier hebdomadaire défini.'
    }
  },
  {
    id: 3,
    projectId: 3,
    thumbnailUrl: 'https://storage.googleapis.com/annitor-lista-documentos/008FCAT25/proyecto-vilademuls.png',
    documentUrl: 'https://storage.googleapis.com/annitor-lista-documentos/008FCAT25/241030_Proyecto%20PFV%20VILADEMULS-1.pdf',
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
    id: 31,
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
