export interface ProjectDataType {
    id: number;
    date: number | string;
    country: string;
    city: string;
    title: string;
    description: string;
    scope: string;
    result: string;
    image: string;
    category: string;
    link: string;
}

export const projectsThreeData: ProjectDataType[] = [
    {
        id: 1,
        date: 2005,
        country: "Spain",
        city: "Girona",
        title: "Photovoltaic plant. 180 Wp polycrystalline panels.",
        description: "Multiple EPCs. None as main.",
        scope: "The installation was around 3 MWp.",
        result: "Still operating successfully today.",
        image: '/img/project/08 copy.jpg',
        category: 'Solar Power',
        link: '/project-details-1',
    },
    {
        id: 2,
        date: 2005,
        country: "Spain",
        city: "Quesada - Jaen",
        title: "Photovoltaic plant. 180 Wp polycrystalline panels.",
        description: "Multiple EPCs. None as main.",
        scope: "Two installations of 12 MWp and 7 MWp.",
        result: "Excellent performance — the cold climate of the Sierra favours production.",
        image: '/img/project/09 copy.jpg',
        category: 'Solar Power',
        link: '/project-details',
    },
    {
        id: 3,
        date: 2012,
        country: "Romania",
        city: "Wallachia",
        title: "Two Photovoltaic Plants – Polycrystalline Panels",
        description: "EPC Annitor Group Valaquia Srl.",
        scope: "Two 9 MWp plants.",
        result: "They maintain excellent output.",
        image: '/img/project/10.jpg',
        category: 'Solar Power',
        link: '/project-details',
    },
    {
        id: 4,
        date: 2015,
        country: "UAE",
        city: "Dubai",
        title: "Two phases of 300 MWp of an 800 MWp plant",
        description: "Site supervision and controller.",
        scope: "",
        result: "",
        image: '/img/project/11 copy.jpg',
        category: 'Solar Power',
        link: '/project-details',
    },
    {
        id: 5,
        date: "2017 - 2022",
        country: "Argentina",
        city: "Jujuy",
        title: "800 MWp in several phases",
        description: "Site supervision and controller.",
        scope: "",
        result: "",
        image: '/img/project/12.jpg',
        category: 'Solar Power',
        link: '/project-details',
    },
];