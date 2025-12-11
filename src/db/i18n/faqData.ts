export interface FaqI18nData {
  id: string;
  question: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  answer: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  delay: string;
  isOpen?: boolean;
  expanded?: boolean;
}

export const faqI18nData: FaqI18nData[] = [
  {
    id: 'faq1',
    question: {
      es: '¿Cómo usar Solaren?',
      en: 'How to use Solaren?',
      fr: 'Comment utiliser Solaren?',
      it: 'Come usare Solaren?'
    },
    answer: {
      es: 'Hay muchas variaciones de pasajes de Lorem Ipsum pero la mayoría han sufrido alteración de alguna forma, por humor inyectado.',
      en: 'There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.',
      fr: 'Il existe de nombreuses variations de passages Lorem Ipsum mais la majorité ont subi des altérations sous une forme ou une autre, par l\'humour injecté.',
      it: 'Ci sono molte variazioni di passaggi Lorem Ipsum ma la maggior parte ha subito alterazioni in qualche forma, dall\'umorismo iniettato.'
    },
    delay: '.3',
    isOpen: false
  },
  {
    id: 'faq2',
    question: {
      es: '¿Qué servicios ofrecen?',
      en: 'What services does you offer?',
      fr: 'Quels services offrez-vous?',
      it: 'Quali servizi offrite?'
    },
    answer: {
      es: 'Hay muchas variaciones de pasajes de Lorem Ipsum pero la mayoría han sufrido alteración de alguna forma, por humor inyectado.',
      en: 'There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.',
      fr: 'Il existe de nombreuses variations de passages Lorem Ipsum mais la majorité ont subi des altérations sous une forme ou une autre, par l\'humour injecté.',
      it: 'Ci sono molte variazioni di passaggi Lorem Ipsum ma la maggior parte ha subito alterazioni in qualche forma, dall\'umorismo iniettato.'
    },
    delay: '.5',
    isOpen: true
  },
  {
    id: 'faq3',
    question: {
      es: '¿Cómo hacer un lanzamiento suave de tu negocio?',
      en: 'How to soft launch your business?',
      fr: 'Comment faire un lancement en douceur de votre entreprise?',
      it: 'Come fare un lancio morbido della tua attività?'
    },
    answer: {
      es: 'Hay muchas variaciones de pasajes de Lorem Ipsum pero la mayoría han sufrido alteración de alguna forma, por humor inyectado.',
      en: 'There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.',
      fr: 'Il existe de nombreuses variations de passages Lorem Ipsum mais la majorité ont subi des altérations sous une forme ou une autre, par l\'humour injecté.',
      it: 'Ci sono molte variazioni di passaggi Lorem Ipsum ma la maggior parte ha subito alterazioni in qualche forma, dall\'umorismo iniettato.'
    },
    delay: '.7',
    isOpen: false
  }
];

export const faqBessI18nData: FaqI18nData[] = [
  {
    id: 'bess1',
    question: {
      es: '¿Qué es exactamente un Sistema de Almacenamiento de Energía en Baterías (BESS)?',
      en: 'What exactly is a Battery Energy Storage System (BESS)?',
      fr: 'Qu\'est-ce qu\'un Système de Stockage d\'Énergie par Batteries (BESS) exactement?',
      it: 'Cos\'è esattamente un Sistema di Accumulo di Energia a Batterie (BESS)?'
    },
    answer: {
      es: 'Un BESS es una tecnología que almacena energía eléctrica en baterías de gran escala para poder usarla más tarde cuando la demanda es alta, cuando la generación renovable es baja, o durante cortes de energía. Garantiza un suministro energético confiable e ininterrumpido.',
      en: 'A BESS is a technology that stores electrical energy in large-scale batteries so it can be used later when demand is high, when renewable generation is low, or during power outages. It ensures a reliable and uninterrupted energy supply.',
      fr: 'Un BESS est une technologie qui stocke l\'énergie électrique dans des batteries à grande échelle pour pouvoir l\'utiliser plus tard lorsque la demande est élevée, lorsque la génération renouvelable est faible, ou pendant les pannes de courant. Il garantit un approvisionnement énergétique fiable et ininterrompu.',
      it: 'Un BESS è una tecnologia che immagazzina energia elettrica in batterie su larga scala per poterla utilizzare successivamente quando la domanda è alta, quando la generazione rinnovabile è bassa, o durante i blackout. Garantisce un approvvigionamento energetico affidabile e ininterrotto.'
    },
    delay: '.3'
  },
  {
    id: 'bess2',
    question: {
      es: '¿Por qué mi empresa o proyecto debería considerar instalar un BESS?',
      en: 'Why should my business or project consider installing a BESS?',
      fr: 'Pourquoi mon entreprise ou projet devrait-il envisager d\'installer un BESS?',
      it: 'Perché la mia azienda o progetto dovrebbe considerare l\'installazione di un BESS?'
    },
    answer: {
      es: 'Al integrar un BESS, obtienes independencia energética, reduces los costos de electricidad y maximizas el uso de fuentes renovables como solar o eólica. También proporciona energía de respaldo, ayudando a que tus operaciones permanezcan estables incluso en caso de fallas de la red.',
      en: 'By integrating a BESS, you gain energy independence, reduce electricity costs, and maximize the use of renewable sources like solar or wind. It also provides backup power, helping your operations remain stable even in case of grid failures.',
      fr: 'En intégrant un BESS, vous gagnez en indépendance énergétique, réduisez les coûts d\'électricité et maximisez l\'utilisation de sources renouvelables comme le solaire ou l\'éolien. Il fournit également une alimentation de secours, aidant vos opérations à rester stables même en cas de pannes du réseau.',
      it: 'Integrando un BESS, ottieni indipendenza energetica, riduci i costi dell\'elettricità e massimizzi l\'uso di fonti rinnovabili come solare o eolico. Fornisce anche alimentazione di backup, aiutando le tue operazioni a rimanere stabili anche in caso di guasti alla rete.'
    },
    delay: '.5'
  },
  {
    id: 'bess3',
    question: {
      es: '¿Cómo ha evolucionado la tecnología BESS en los últimos años?',
      en: 'How has BESS technology evolved in recent years?',
      fr: 'Comment la technologie BESS a-t-elle évolué ces dernières années?',
      it: 'Come si è evoluta la tecnologia BESS negli ultimi anni?'
    },
    answer: {
      es: 'BESS ha avanzado rápidamente desde pequeños proyectos piloto hasta sistemas altamente eficientes, escalables y rentables. Las baterías modernas son más seguras, tienen vidas útiles más largas y vienen con software inteligente para la gestión de energía, convirtiéndolas en un activo estratégico para empresas y comunidades.',
      en: 'BESS has rapidly advanced from small pilot projects to highly efficient, scalable, and cost-effective systems. Modern batteries are safer, have longer lifespans, and come with intelligent software for energy management, making them a strategic asset for companies and communities.',
      fr: 'BESS a rapidement évolué de petits projets pilotes vers des systèmes hautement efficaces, évolutifs et rentables. Les batteries modernes sont plus sûres, ont des durées de vie plus longues et sont équipées de logiciels intelligents pour la gestion de l\'énergie, en faisant un atout stratégique pour les entreprises et les communautés.',
      it: 'BESS è rapidamente avanzato da piccoli progetti pilota a sistemi altamente efficienti, scalabili e convenienti. Le batterie moderne sono più sicure, hanno durate di vita più lunghe e sono dotate di software intelligente per la gestione dell\'energia, rendendole un asset strategico per aziende e comunità.'
    },
    delay: '.7',
    expanded: true
  }
];