export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    link: string;
    delay: string;
    active?:boolean;
    image?:string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Weed Extraction",
        description: "For your car we will do everything advice repairs",
        icon: "/img/service/icon/batería.svg",
        link: "/#",
        delay:'.3'
    },
    {
        id: 2,
        title: "Pristine Garden",
        description: "For your car we will do everything advice repairs",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/#",
        delay:'.5',
        active:true
    },
    {
        id: 3,
        title: "Garden Renewal",
        description: "For your car we will do everything advice repairs",
        icon: "/img/service/icon/s-icon-3.svg",
        link: "/#",
        delay:'.7'
    },
    {
        id: 4,
        title: "SolarEdge Services",
        description: "For your car we will do everything advice repairs",
        icon: "/img/service/icon/s-icon-4.svg",
        link: "/#",
        delay:'.9'
    },
    {
        id: 5,
        title: "Solar Repair",
        description: "Mauris ultrices ligula eget volutpat aliquet nullam",
        icon: "/img/service/icon/s-icon-10.svg",
        link: "/#",
        delay:'.3'
    },
    {
        id: 6,
        title: "Power Storage BESS",
        description: "Mauris ultrices ligula eget volutpat aliquet nullam",
        icon: "/img/service/icon/s-icon-11.svg",
        link: "/service-details-bess",
        delay:'.5'
    },
    {
        id: 7,
        title: "Solar Energy",
        description: "Mauris ultrices ligula eget volutpat aliquet nullam",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/#",
        delay:'.7'
    },
    {
        id: 8,
        title: "Hidrogen solutions",
        description: "Mauris ultrices ligula eget volutpat aliquet nullam",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/service-details-hidrogen",
        delay:'.9'
    }
];
