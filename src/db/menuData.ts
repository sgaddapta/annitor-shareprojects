type MenuLink = {
  title: string;
  link: string;
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  submenu?: SubMenuDataType[];
};


export const menuData: MenuItemDataType[] = [
  {
    title: 'Home',
    link: '/',
    megamenu: [
      {
        image: '/img/header/home-1.jpg',
        title: 'Home 01',
        links: [],
      },
      {
        image: '/img/header/home-2.jpg',
        title: 'Home 02',
        links: [],
      },
      {
        image: '/img/header/home-3.jpg',
        title: 'Home 03',
        links: [
          { title: 'Multi Page', link: 'home-three' },
          { title: 'One Page', link: '/home-three-single' },
        ],
      },
      {
        image: '/img/header/home-4.jpg',
        title: 'Home 04',
        links: [
          { title: 'One Page', link: '/home-four-single' },
        ],
      },
    ],
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];
