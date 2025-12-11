export interface BlogI18nData {
  id: number;
  date: {
    day: string;
    month: string;
    year: string;
  };
  image: string;
  author: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  category: {
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
  content: {
    es: string[];
    en: string[];
    fr: string[];
    it: string[];
  };
  link: string;
  delay: string;
}

export const blogI18nData: BlogI18nData[] = [
  {
    id: 1,
    date: { day: '17', month: 'Abr', year: '2025' },
    image: '/img/news/04.jpg',
    author: {
      es: 'Manuel Sanchez - CEO',
      en: 'Manuel Sanchez - CEO',
      fr: 'Manuel Sanchez - PDG',
      it: 'Manuel Sanchez - CEO'
    },
    category: {
      es: 'Acuerdos',
      en: 'Agreements',
      fr: 'Accords',
      it: 'Accordi'
    },
    title: {
      es: 'Annitor está negociando con un grupo empresarial peruano del AIE',
      en: 'Annitor is negotiating with a Peruvian business group from the AIE',
      fr: 'Annitor négocie avec un groupe d\'entreprises péruvien de l\'AIE',
      it: 'Annitor sta negoziando con un gruppo imprenditoriale peruviano dell\'AIE'
    },
    description: {
      es: 'Annitor está negociando importantes acuerdos con un grupo empresarial peruano del AIE en el sector agrícola y hotelero.',
      en: 'Annitor is negotiating important agreements with a Peruvian business group from the AIE in the agricultural & hotel sector.',
      fr: 'Annitor négocie des accords importants avec un groupe d\'entreprises péruvien de l\'AIE dans le secteur agricole et hôtelier.',
      it: 'Annitor sta negoziando importanti accordi con un gruppo imprenditoriale peruviano dell\'AIE nel settore agricolo e alberghiero.'
    },
    content: {
      es: [
        'Annitor está negociando importantes acuerdos con un grupo empresarial peruano del AIE (Agrupación de Interés Económico) en el sector agrícola y hotelero. Este hito representa un paso significativo en la estrategia de expansión internacional de la empresa y refuerza su compromiso de impulsar soluciones sostenibles en mercados clave de América Latina.',
        'A través de esta alianza, Annitor fortalece su posición como socio tecnológico de confianza, aportando su experiencia en el desarrollo de proyectos de energía renovable y soluciones de almacenamiento energético de vanguardia. El acuerdo abre la puerta a nuevas oportunidades de colaboración en un sector que está experimentando una gran transformación hacia la eficiencia y la sostenibilidad.'
      ],
      en: [
        'Annitor is negotiating important agreements with a Peruvian business group from the AIE (Economic Interest Grouping) in the agricultural & hotel sector. This milestone represents a significant step forward in the company\'s international expansion strategy and reinforces its commitment to driving sustainable solutions in key Latin American markets.',
        'Through this alliance, Annitor strengthens its position as a trusted technology partner, bringing its expertise in the development of renewable energy projects and state-of-the-art energy storage solutions. The agreement opens the door to new opportunities for collaboration in a sector that is undergoing a major transformation towards efficiency and sustainability.'
      ],
      fr: [
        'Annitor négocie des accords importants avec un groupe d\'entreprises péruvien de l\'AIE (Groupement d\'Intérêt Économique) dans le secteur agricole et hôtelier. Cette étape représente un pas significatif dans la stratégie d\'expansion internationale de l\'entreprise et renforce son engagement à promouvoir des solutions durables sur les marchés clés d\'Amérique latine.',
        'Grâce à cette alliance, Annitor renforce sa position de partenaire technologique de confiance, apportant son expertise dans le développement de projets d\'énergie renouvelable et de solutions de stockage d\'énergie de pointe. L\'accord ouvre la porte à de nouvelles opportunités de collaboration dans un secteur qui connaît une transformation majeure vers l\'efficacité et la durabilité.'
      ],
      it: [
        'Annitor sta negoziando importanti accordi con un gruppo imprenditoriale peruviano dell\'AIE (Raggruppamento di Interesse Economico) nel settore agricolo e alberghiero. Questa pietra miliare rappresenta un passo significativo nella strategia di espansione internazionale dell\'azienda e rafforza il suo impegno nel promuovere soluzioni sostenibili nei mercati chiave dell\'America Latina.',
        'Attraverso questa alleanza, Annitor rafforza la sua posizione come partner tecnologico di fiducia, portando la sua esperienza nello sviluppo di progetti di energia rinnovabile e soluzioni di stoccaggio energetico all\'avanguardia. L\'accordo apre la porta a nuove opportunità di collaborazione in un settore che sta subendo una grande trasformazione verso l\'efficienza e la sostenibilità.'
      ]
    },
    link: '/news-details-1',
    delay: '.3'
  },
  {
    id: 2,
    date: { day: '20', month: 'May', year: '2025' },
    image: '/img/news/07.jpg',
    author: {
      es: 'Annitor España',
      en: 'Annitor Spain',
      fr: 'Annitor Espagne',
      it: 'Annitor Spagna'
    },
    category: {
      es: 'Acuerdos',
      en: 'Agreements',
      fr: 'Accords',
      it: 'Accordi'
    },
    title: {
      es: 'Acuerdo con fabricante español de sistemas BESS',
      en: 'Agreement with Spanish manufacturer of BESS systems',
      fr: 'Accord avec un fabricant espagnol de systèmes BESS',
      it: 'Accordo con produttore spagnolo di sistemi BESS'
    },
    description: {
      es: 'Annitor firma un acuerdo preliminar con un fabricante español especializado en sistemas de acoplamiento y sincronización para BESS.',
      en: 'Annitor signs a preliminary agreement with a Spanish manufacturer specialized in coupling and synchronization systems for BESS.',
      fr: 'Annitor signe un accord préliminaire avec un fabricant espagnol spécialisé dans les systèmes de couplage et de synchronisation pour BESS.',
      it: 'Annitor firma un accordo preliminare con un produttore spagnolo specializzato in sistemi di accoppiamento e sincronizzazione per BESS.'
    },
    content: {
      es: [
        'Annitor se complace en anunciar la firma de un acuerdo preliminar con un fabricante español especializado en sistemas de acoplamiento y sincronización para Soluciones de Almacenamiento de Energía en Baterías (BESS). Este paso marca un momento importante en la hoja de ruta de la empresa y destaca su determinación de seguir construyendo alianzas sólidas con actores clave del sector energético.',
        'El acuerdo refleja el esfuerzo continuo de Annitor por explorar asociaciones innovadoras que contribuyan al desarrollo de tecnologías avanzadas y refuercen su capacidad para responder a la creciente demanda de soluciones energéticas confiables y sostenibles.'
      ],
      en: [
        'Annitor is pleased to announce the signing of a preliminary agreement with a Spanish manufacturer specialized in coupling and synchronization systems for Battery Energy Storage Solutions (BESS). This step marks an important moment in the company\'s roadmap and highlights its determination to keep building strong alliances with key players in the energy sector.',
        'The agreement reflects Annitor\'s continuous effort to explore innovative partnerships that contribute to the development of advanced technologies and reinforce its capacity to respond to the growing demand for reliable and sustainable energy solutions.'
      ],
      fr: [
        'Annitor a le plaisir d\'annoncer la signature d\'un accord préliminaire avec un fabricant espagnol spécialisé dans les systèmes de couplage et de synchronisation pour les Solutions de Stockage d\'Énergie par Batteries (BESS). Cette étape marque un moment important dans la feuille de route de l\'entreprise et souligne sa détermination à continuer de construire des alliances solides avec les acteurs clés du secteur énergétique.',
        'L\'accord reflète l\'effort continu d\'Annitor pour explorer des partenariats innovants qui contribuent au développement de technologies avancées et renforcent sa capacité à répondre à la demande croissante de solutions énergétiques fiables et durables.'
      ],
      it: [
        'Annitor è lieta di annunciare la firma di un accordo preliminare con un produttore spagnolo specializzato in sistemi di accoppiamento e sincronizzazione per Soluzioni di Accumulo di Energia a Batterie (BESS). Questo passo segna un momento importante nella roadmap dell\'azienda e sottolinea la sua determinazione nel continuare a costruire alleanze solide con i protagonisti chiave del settore energetico.',
        'L\'accordo riflette lo sforzo continuo di Annitor nell\'esplorare partnership innovative che contribuiscano allo sviluppo di tecnologie avanzate e rafforzino la sua capacità di rispondere alla crescente domanda di soluzioni energetiche affidabili e sostenibili.'
      ]
    },
    link: '/news-details-2',
    delay: '.3'
  }
];