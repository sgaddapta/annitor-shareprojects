export interface BlogPostDataType {
    id: number;
    date: {
        day: string;
        month: string;
        year:string
    };
    image: string;
    author: string;
    category: string;
    title: string;
    link: string;
    delay: string;
    description: string;
}


export const blogPostsThreeData:BlogPostDataType[] = [
    {
        id:1,
        date: { day: '17', month: 'Abr', year:'2025' },
        image: '/img/news/04.jpg',
        author: 'Manuel Sanchez - CEO',
        category: 'Agreedments',
        title: 'Annitor is negotiating with a Peruvian business group from the AIE',
        link: '/news-details-1',
        description:'',
        delay:'.3'
    },
    {
        id:2,
        date: { day: '20', month: 'May', year:'2025' },
        image: '/img/news/07.jpg',
        author: 'Annitor Spain',
        category: 'UI/UX Design',
        title: 'Agreement with Spanish manufacturer of BESS systems',
        link: '/news-details-2',
        description:'',
        delay:'.3'
    },
    {
        id:3,
        date: { day: '10', month: 'May', year:'2025' },
        image: '/img/news/08.jpg',
        author: 'Annitor Spain',
        category: 'Agreements',
        title: 'Annitor reaches a collaboration agreement with German support SLRack',
        link: '/news-details-3',
        description:'',
        delay:'.3'
    },
    {
        id:4,
        date: { day: '20', month: 'Jun', year:'2025' },
        image: '/img/news/09.jpg',
        author: 'Annitor Spain',
        category: 'UI/UX Design',
        title: 'Energy project for slaughterhouses in Romania',
        link: '/news-details-4',
        description:'',
        delay:'.3'
    },
    {
        id:5,
        date: { day: '10', month: 'Jun', year:'2025' },
        image: '/img/news/10.jpg',
        author: 'Annitor Africa',
        category: 'Cyber Security',
        title: 'Photovoltaic installation and BESS covering the 20,000 m²',
        link: '/news-details-5',
        description:'',
        delay:'.3'
    },
    {
        id:6,
        date: { day: '20', month: 'July', year:'2025' },
        image: '/img/news/11.jpg',
        author: 'Annitor Africa',
        category: 'Agreements',
        title: 'Moroccan government battery plant for BESS',
        link: '/news-details-6',
        description:'',
        delay:'.3'
    },
];