export interface AboutI18nData {
  sectionTitle: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
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
  features: {
    title: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
    items: {
      es: string[];
      en: string[];
      fr: string[];
      it: string[];
    };
  };
  stats: {
    number: string;
    label: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
  };
  contact: {
    label: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
    phone: string;
  };
}

export const aboutI18nData: AboutI18nData = {
  sectionTitle: {
    es: 'ACERCA DE NOSOTROS',
    en: 'ABOUT US',
    fr: 'À PROPOS DE NOUS',
    it: 'CHI SIAMO'
  },
  title: {
    es: 'Energía solar que nunca se agota',
    en: 'Solar energy that never goes out',
    fr: 'Énergie solaire qui ne s\'épuise jamais',
    it: 'Energia solare che non si esaurisce mai'
  },
  description: {
    es: 'La energía solar que nunca se desvanece convierte cada rayo de sol en energía disponible en cualquier momento, día o noche. El almacenamiento fotovoltaico optimiza el uso de la electricidad generada, asegurando un suministro estable y eficiente libre de interrupciones. Sus sistemas modulares se adaptan a todo tipo de necesidades, reduciendo costos y mejorando la rentabilidad de las instalaciones. Además, fortalecen la seguridad energética y contribuyen a un futuro más sostenible y sin emisiones.',
    en: 'Solar energy that never fades turns every ray of sunlight into power available at any time, day or night. Photovoltaic storage optimises the use of generated electricity, ensuring a stable, efficient supply free from interruptions. Its modular systems adapt to all types of needs, reducing costs and improving the profitability of installations. In addition, they strengthen energy security and contribute to a more sustainable, zero-emission future.',
    fr: 'L\'énergie solaire qui ne s\'estompe jamais transforme chaque rayon de soleil en énergie disponible à tout moment, jour ou nuit. Le stockage photovoltaïque optimise l\'utilisation de l\'électricité générée, assurant un approvisionnement stable et efficace sans interruptions. Ses systèmes modulaires s\'adaptent à tous types de besoins, réduisant les coûts et améliorant la rentabilité des installations. De plus, ils renforcent la sécurité énergétique et contribuent à un avenir plus durable et sans émissions.',
    it: 'L\'energia solare che non svanisce mai trasforma ogni raggio di sole in energia disponibile in qualsiasi momento, giorno o notte. Lo stoccaggio fotovoltaico ottimizza l\'uso dell\'elettricità generata, garantendo un approvvigionamento stabile ed efficiente senza interruzioni. I suoi sistemi modulari si adattano a tutti i tipi di esigenze, riducendo i costi e migliorando la redditività delle installazioni. Inoltre, rafforzano la sicurezza energetica e contribuiscono a un futuro più sostenibile e a zero emissioni.'
  },
  features: {
    title: {
      es: 'Características Principales',
      en: 'Key Features',
      fr: 'Caractéristiques Principales',
      it: 'Caratteristiche Principali'
    },
    items: {
      es: [
        'Autonomía y continuidad de suministro',
        'Seguridad y sostenibilidad',
        'Optimización económica'
      ],
      en: [
        'Autonomy and continuity of supply',
        'Security and sustainability',
        'Economic optimisation'
      ],
      fr: [
        'Autonomie et continuité d\'approvisionnement',
        'Sécurité et durabilité',
        'Optimisation économique'
      ],
      it: [
        'Autonomia e continuità di fornitura',
        'Sicurezza e sostenibilità',
        'Ottimizzazione economica'
      ]
    }
  },
  stats: {
    number: '+3200',
    label: {
      es: 'Beneficiarios',
      en: 'Beneficiaries',
      fr: 'Bénéficiaires',
      it: 'Beneficiari'
    }
  },
  contact: {
    label: {
      es: 'Llámanos Ahora',
      en: 'Call Us Now',
      fr: 'Appelez-nous Maintenant',
      it: 'Chiamaci Ora'
    },
    phone: '+34 606 690792'
  }
};