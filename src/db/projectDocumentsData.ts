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
      es: 'El proyecto VILADEMULS-1 describe una planta solar fotovoltaica de 3,2 MW en Vilademuls (Girona), instalada sobre 7,57 ha dentro de un terreno total de 18,37 ha, empleando 6.104 módulos bifaciales de 660 Wp montados en seguidores a un eje y conectados a 28 inversores. La instalación inyectará la energía en una línea de 25 kV próxima a la parcela y contará con cuatro centros de transformación y un sistema de almacenamiento LFP de 3.000 kW / 6.420 kWh. El documento detalla la radiación solar disponible, el dimensionado del campo generador, los accesos, la obra civil, el cableado, protecciones eléctricas, la puesta a tierra y la normativa aplicable. También incluye estudios de producción, cronograma, análisis estructural y de viabilidad, definiendo todos los elementos necesarios para la construcción, conexión, operación y seguridad de la planta.',
      en: 'The VILADEMULS-1 project outlines a 3.2 MW photovoltaic plant in Vilademuls (Girona), occupying 7.57 ha within a total area of 18.37 ha and equipped with 6,104 bifacial 660 Wp modules mounted on single-axis trackers and connected to 28 inverters. The installation will inject electricity into a nearby 25 kV distribution line and includes four transformer stations and a lithium-iron-phosphate (LFP) battery storage system of 3,000 kW / 6,420 kWh. The document details the solar resource, system sizing, site access, civil works, cabling, electrical protections, grounding system, and applicable regulations. It also includes production studies, a construction schedule, structural and economic feasibility analyses, and all technical elements required for the plant’s construction, grid connection, operation, and safety.',
      fr: 'Le projet VILADEMULS-1 présente une centrale photovoltaïque de 3,2 MW située à Vilademuls (Gérone), occupant 7,57 ha au sein d’une superficie totale de 18,37 ha et équipée de 6 104 modules bifaciaux de 660 Wp montés sur des suiveurs à un axe et raccordés à 28 onduleurs. L’installation injectera l’électricité produite dans une ligne de distribution voisine de 25 kV et comprendra quatre centres de transformation ainsi qu’un système de stockage LFP de 3 000 kW / 6 420 kWh. Le document détaille les ressources solaires, le dimensionnement du système, les accès au site, les travaux de génie civil, le câblage, les protections électriques, la mise à la terre et la réglementation applicable. Il inclut également les études de production, le planning des travaux, l’analyse structurelle et la viabilité économique, définissant l’ensemble des éléments nécessaires à la construction, au raccordement au réseau, à l’exploitation et à la sécurité de la centrale.',
      it: 'Il progetto VILADEMULS-1 descrive un impianto fotovoltaico da 3,2 MW situato a Vilademuls (Girona), che occupa 7,57 ha all’interno di una superficie totale di 18,37 ha ed è dotato di 6.104 moduli bifacciali da 660 Wp montati su inseguitori a un asse e collegati a 28 inverter. L’impianto immetterà l’energia prodotta in una linea di distribuzione a 25 kV vicina al sito e comprenderà quattro centri di trasformazione e un sistema di accumulo LFP da 3.000 kW / 6.420 kWh. Il documento illustra le risorse solari, il dimensionamento del sistema, gli accessi, le opere civili, il cablaggio, le protezioni elettriche, il sistema di messa a terra e la normativa applicabile. Sono inoltre inclusi studi di produzione, cronoprogramma dei lavori, analisi strutturale e valutazione economica, definendo tutti gli elementi necessari per la costruzione, il collegamento alla rete, l’esercizio e la sicurezza dell’impianto.'
    }
  },
  {
    id: 31,
    projectId: 3,
    thumbnailUrl: 'https://storage.googleapis.com/annitor-lista-documentos/008FCAT25/Cronograma-Vilademuls.png',
    documentUrl: 'https://storage.googleapis.com/annitor-lista-documentos/008FCAT25/241030_Proyecto%20PFV%20VILADEMULS-Cronologia.pdf',
    title: {
      es: 'Informe Técnico del Proyecto',
      en: 'Project Technical Report',
      fr: 'Rapport Technique du Projet',
      it: 'Relazione Tecnica del Progetto'
    },
    description: {
      es: 'El cronograma del proyecto fotovoltaico Vilademuls-1 detalla las fases de ejecución desde las primeras obras de preparación del terreno hasta la puesta en marcha final. Las actividades iniciales incluyen el desbroce, la adecuación del terreno, la construcción de viales y la ejecución de zanjas y canalizaciones, seguidas del cerramiento perimetral. En paralelo se programan los suministros de paneles, seguidores, inversores, centros de transformación y sistemas de almacenamiento. La fase de montaje abarca la instalación de seguidores, paneles, cableado en CC y CA, inversores, centros de transformación y equipos de almacenamiento. Posteriormente se instalan los sistemas de control, vigilancia e iluminación. El proyecto culmina con las pruebas de funcionamiento y la puesta en marcha, siguiendo una planificación semanal estructurada.',
      en: 'TThe project schedule for the Vilademuls-1 (3.2 MW) photovoltaic plant outlines the full sequence of works from initial land preparation to final commissioning. Early activities include clearing and grading the terrain, building access roads, and executing trenches and cable routes, followed by installation of the perimeter fence. In parallel, the delivery of panels, trackers, inverters, transformer stations, and battery storage systems is planned. The installation phase covers mounting the trackers and panels, DC and AC cabling, inverter integration, transformer station assembly, and installation of storage units. Subsequent steps include installing control, monitoring, and lighting systems. The project concludes with functional testing and final commissioning according to the structured week-by-week timeline.',
      fr: 'Le calendrier du projet photovoltaïque Vilademuls-1 (3,2 MW) présente l’ensemble des étapes, depuis la préparation initiale du terrain jusqu’à la mise en service finale. Les premières activités incluent le débroussaillage, le nivellement du terrain, la construction des voies d’accès et l’excavation des tranchées, suivis de l’installation du clôture périmétrique. Parallèlement s’organisent les livraisons de panneaux, suiveurs, onduleurs, centres de transformation et systèmes de stockage. La phase de montage comprend l’installation des suiveurs et des panneaux, le câblage en CC et en CA, l’intégration des onduleurs, l’assemblage des centres de transformation et la mise en place des unités de stockage. Les systèmes de contrôle, de surveillance et d’éclairage sont ensuite installés. Le projet s’achève par les essais de fonctionnement puis la mise en service, conformément au planning hebdomadaire structuré.',
      it: 'Il cronoprogramma del progetto fotovoltaico Vilademuls-1 (3,2 MW) descrive tutte le fasi dei lavori, dalla preparazione iniziale del terreno fino alla messa in servizio finale. Le prime attività includono la pulizia e livellazione del suolo, la costruzione delle strade di accesso e lo scavo delle trincee, seguiti dall’installazione della recinzione perimetrale. Parallelamente sono previste le consegne di pannelli, inseguitori, inverter, centri di trasformazione e sistemi di accumulo. La fase di montaggio comprende l’installazione degli inseguitori e dei pannelli, il cablaggio CC e CA, l’integrazione degli inverter, l’assemblaggio dei centri di trasformazione e il posizionamento delle unità di accumulo. Successivamente vengono installati i sistemi di controllo, sorveglianza e illuminazione. Il progetto si conclude con le prove di funzionamento e la messa in servizio, seguendo un calendario settimanale strutturato.'
    }
  }
]
