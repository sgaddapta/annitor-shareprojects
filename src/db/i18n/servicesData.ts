export interface ServiceI18nData {
  id: number;
  title: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  description: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  category: string;
  icon: string;
  image?: string;
  link: string;
  delay: string;
  active?: boolean;
}

export const servicesI18nData: ServiceI18nData[] = [
  {
    id: 1,
    title: {
      es: 'Almacenamiento de Energía (BESS)',
      en: 'Power Storage (BESS)',
      fr: 'Stockage d\'Énergie (BESS)',
      it: 'Accumulo di Energia (BESS)'
    },
    description: {
      es: 'Instalación de baterías para almacenar energía solar y garantizar un suministro eléctrico continuo y eficiente.',
      en: 'Battery installation for storing solar energy and ensuring a continuous, efficient power supply.',
      fr: 'Installation de batteries pour stocker l\'énergie solaire et assurer un approvisionnement électrique continu et efficace.',
      it: 'Installazione di batterie per immagazzinare energia solare e garantire un\'alimentazione elettrica continua ed efficiente.'
    },
    category: 'storage',
    icon: '/img/service/icon/batería.svg',
    image: '/img/service/02.jpg',
    link: '/service-details-bess',
    delay: '0.2s'
  },
  {
    id: 2,
    title: {
      es: 'Proyectos Fotovoltaicos',
      en: 'Solar PV Projects',
      fr: 'Projets Photovoltaïques',
      it: 'Progetti Fotovoltaici'
    },
    description: {
      es: 'Diseño e instalación de sistemas fotovoltaicos para la generación de energía limpia y confiable.',
      en: 'Design and installation of solar PV systems for clean, reliable energy generation.',
      fr: 'Conception et installation de systèmes photovoltaïques pour une génération d\'énergie propre et fiable.',
      it: 'Progettazione e installazione di sistemi fotovoltaici per la generazione di energia pulita e affidabile.'
    },
    category: 'solar',
    icon: '/img/service/icon/s-icon-2.svg',
    image: '/img/service/03.jpg',
    link: '/service-details',
    delay: '0.2s'
  },
  {
    id: 3,
    title: {
      es: 'Estudios de Viabilidad',
      en: 'Feasibility Studies',
      fr: 'Études de Faisabilité',
      it: 'Studi di Fattibilità'
    },
    description: {
      es: 'Entregamos proyectos llave en mano que convierten residuos en energía renovable y subproductos valiosos mediante tecnologías sostenibles.',
      en: 'We deliver turnkey projects that convert waste into renewable energy and valuable by-products through sustainable technologies.',
      fr: 'Nous livrons des projets clés en main qui convertissent les déchets en énergie renouvelable et sous-produits précieux grâce aux technologies durables.',
      it: 'Consegniamo progetti chiavi in mano che convertono i rifiuti in energia rinnovabile e sottoprodotti preziosi attraverso tecnologie sostenibili.'
    },
    category: 'consulting',
    icon: '/img/service/icon/s-icon-3.svg',
    image: '/img/service/04.jpg',
    link: '/service-details',
    delay: '0.2s'
  },
  {
    id: 4,
    title: {
      es: 'Producción Hidrógeno Verde',
      en: 'Green Hydrogen Production',
      fr: 'Production d\'Hydrogène Vert',
      it: 'Produzione di Idrogeno Verde'
    },
    description: {
      es: 'La producción de hidrógeno a partir de energías renovables ha dejado de ser una idea de futuro para convertirse en una realidad competitiva.',
      en: 'The production of hydrogen from renewable energy has ceased to be a future idea and has become a competitive reality.',
      fr: 'La production d\'hydrogène à partir d\'énergies renouvelables a cessé d\'être une idée d\'avenir pour devenir une réalité compétitive.',
      it: 'La produzione di idrogeno da fonti rinnovabili ha smesso di essere un\'idea futuristica per diventare una realtà competitiva.'
    },
    category: 'maintenance',
    icon: '/img/service/icon/s-icon-4.svg',
    image: '/img/service/05.jpg',
    link: '/service-details-hydrogen',
    delay: '0.2s'
  }
];