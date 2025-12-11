export interface ProjectI18nData {
  id: number;
  date: number | string;
  country: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  city: string;
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
  scope: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  result: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  image: string;
  category: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  link: string;
}

export const projectsI18nData: ProjectI18nData[] = [
  {
    id: 1,
    date: 2005,
    country: {
      es: 'España',
      en: 'Spain',
      fr: 'Espagne',
      it: 'Spagna'
    },
    city: 'Girona',
    title: {
      es: 'Planta fotovoltaica. 180 paneles policristalinos Wp.',
      en: 'Photovoltaic plant. 180 Wp polycrystalline panels.',
      fr: 'Centrale photovoltaïque. 180 panneaux polycristallins Wp.',
      it: 'Impianto fotovoltaico. 180 pannelli policristallini Wp.'
    },
    description: {
      es: 'Múltiples EPCs. Ninguno como principal.',
      en: 'Multiple EPCs. None as main.',
      fr: 'Multiples EPCs. Aucun comme principal.',
      it: 'Multipli EPC. Nessuno come principale.'
    },
    scope: {
      es: 'La instalación fue de alrededor de 3 MWp.',
      en: 'The installation was around 3 MWp.',
      fr: 'L\'installation était d\'environ 3 MWp.',
      it: 'L\'installazione era di circa 3 MWp.'
    },
    result: {
      es: 'Sigue funcionando con éxito hoy en día.',
      en: 'Still operating successfully today.',
      fr: 'Fonctionne encore avec succès aujourd\'hui.',
      it: 'Funziona ancora con successo oggi.'
    },
    image: '/img/project/08 copy.jpg',
    category: {
      es: 'Energía Solar',
      en: 'Solar Power',
      fr: 'Énergie Solaire',
      it: 'Energia Solare'
    },
    link: '/project-details-1'
  },
  {
    id: 2,
    date: 2005,
    country: {
      es: 'España',
      en: 'Spain',
      fr: 'Espagne',
      it: 'Spagna'
    },
    city: 'Quesada - Jaén',
    title: {
      es: 'Planta fotovoltaica. 180 paneles policristalinos Wp.',
      en: 'Photovoltaic plant. 180 Wp polycrystalline panels.',
      fr: 'Centrale photovoltaïque. 180 panneaux polycristallins Wp.',
      it: 'Impianto fotovoltaico. 180 pannelli policristallini Wp.'
    },
    description: {
      es: 'Múltiples EPCs. Ninguno como principal.',
      en: 'Multiple EPCs. None as main.',
      fr: 'Multiples EPCs. Aucun comme principal.',
      it: 'Multipli EPC. Nessuno come principale.'
    },
    scope: {
      es: 'Dos instalaciones de 12 MWp y 7 MWp.',
      en: 'Two installations of 12 MWp and 7 MWp.',
      fr: 'Deux installations de 12 MWp et 7 MWp.',
      it: 'Due installazioni da 12 MWp e 7 MWp.'
    },
    result: {
      es: 'Excelente rendimiento: el clima frío de la Sierra favorece la producción.',
      en: 'Excellent performance — the cold climate of the Sierra favours production.',
      fr: 'Excellente performance — le climat froid de la Sierra favorise la production.',
      it: 'Prestazioni eccellenti — il clima freddo della Sierra favorisce la produzione.'
    },
    image: '/img/project/09 copy.jpg',
    category: {
      es: 'Energía Solar',
      en: 'Solar Power',
      fr: 'Énergie Solaire',
      it: 'Energia Solare'
    },
    link: '/project-details'
  },
  {
    id: 3,
    date: 2012,
    country: {
      es: 'Rumania',
      en: 'Romania',
      fr: 'Roumanie',
      it: 'Romania'
    },
    city: 'Valaquia',
    title: {
      es: 'Dos Plantas Fotovoltaicas – Paneles Policristalinos',
      en: 'Two Photovoltaic Plants – Polycrystalline Panels',
      fr: 'Deux Centrales Photovoltaïques – Panneaux Polycristallins',
      it: 'Due Impianti Fotovoltaici – Pannelli Policristallini'
    },
    description: {
      es: 'EPC Annitor Group Valaquia Srl.',
      en: 'EPC Annitor Group Valaquia Srl.',
      fr: 'EPC Annitor Group Valaquia Srl.',
      it: 'EPC Annitor Group Valaquia Srl.'
    },
    scope: {
      es: 'Dos plantas de 9 MWp.',
      en: 'Two 9 MWp plants.',
      fr: 'Deux centrales de 9 MWp.',
      it: 'Due impianti da 9 MWp.'
    },
    result: {
      es: 'Mantienen una excelente producción.',
      en: 'They maintain excellent output.',
      fr: 'Ils maintiennent une excellente production.',
      it: 'Mantengono un\'eccellente produzione.'
    },
    image: '/img/project/10.jpg',
    category: {
      es: 'Energía Solar',
      en: 'Solar Power',
      fr: 'Énergie Solaire',
      it: 'Energia Solare'
    },
    link: '/project-details'
  },
  {
    id: 4,
    date: 2015,
    country: {
      es: 'Emiratos Árabes Unidos',
      en: 'UAE',
      fr: 'Émirats Arabes Unis',
      it: 'Emirati Arabi Uniti'
    },
    city: 'Dubai',
    title: {
      es: 'Dos fases de 300 MWp de una planta de 800 MWp',
      en: 'Two phases of 300 MWp of an 800 MWp plant',
      fr: 'Deux phases de 300 MWp d\'une centrale de 800 MWp',
      it: 'Due fasi da 300 MWp di un impianto da 800 MWp'
    },
    description: {
      es: 'Supervisión de obra y controlador.',
      en: 'Site supervision and controller.',
      fr: 'Supervision de chantier et contrôleur.',
      it: 'Supervisione del sito e controllore.'
    },
    scope: {
      es: '',
      en: '',
      fr: '',
      it: ''
    },
    result: {
      es: '',
      en: '',
      fr: '',
      it: ''
    },
    image: '/img/project/11 copy.jpg',
    category: {
      es: 'Energía Solar',
      en: 'Solar Power',
      fr: 'Énergie Solaire',
      it: 'Energia Solare'
    },
    link: '/project-details'
  },
  {
    id: 5,
    date: '2017 - 2022',
    country: {
      es: 'Argentina',
      en: 'Argentina',
      fr: 'Argentine',
      it: 'Argentina'
    },
    city: 'Jujuy',
    title: {
      es: '800 MWp en varias fases',
      en: '800 MWp in several phases',
      fr: '800 MWp en plusieurs phases',
      it: '800 MWp in diverse fasi'
    },
    description: {
      es: 'Supervisión de obra y controlador.',
      en: 'Site supervision and controller.',
      fr: 'Supervision de chantier et contrôleur.',
      it: 'Supervisione del sito e controllore.'
    },
    scope: {
      es: '',
      en: '',
      fr: '',
      it: ''
    },
    result: {
      es: '',
      en: '',
      fr: '',
      it: ''
    },
    image: '/img/project/12.jpg',
    category: {
      es: 'Energía Solar',
      en: 'Solar Power',
      fr: 'Énergie Solaire',
      it: 'Energia Solare'
    },
    link: '/project-details'
  }
];