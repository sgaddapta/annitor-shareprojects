export interface AchievementI18nData {
  id: number;
  count: number;
  description: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  icon: string;
  delay: string;
}

export const achievementI18nData: AchievementI18nData[] = [
  {
    id: 1,
    count: 6561,
    description: {
      es: '6,561 Clientes Satisfechos',
      en: 'Satisfied 6,561 Clients',
      fr: '6,561 Clients Satisfaits',
      it: '6,561 Clienti Soddisfatti'
    },
    icon: '/img/achievement-icon/01.svg',
    delay: '.3'
  },
  {
    id: 2,
    count: 20,
    description: {
      es: 'Mega Proyectos',
      en: 'Mega Projects',
      fr: 'Méga Projets',
      it: 'Mega Progetti'
    },
    icon: '/img/achievement-icon/02.svg',
    delay: '.5'
  },
  {
    id: 3,
    count: 80,
    description: {
      es: 'Expertos Cualificados',
      en: 'Skilled Experts',
      fr: 'Experts Qualifiés',
      it: 'Esperti Qualificati'
    },
    icon: '/img/achievement-icon/03.svg',
    delay: '.7'
  }
];