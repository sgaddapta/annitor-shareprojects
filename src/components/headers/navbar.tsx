import { menuData, MenuItemDataType } from "@/db/menuData";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuDataSingleHomePage } from "@/db/menuDataSingleHomePage";
import { useLanguage } from "@/hooks/useLanguage"
import { navigationI18nData } from "@/db/i18n/navigationData"

function Navbar() {
    const pathName = useLocation().pathname
    const [data, setData] = useState<MenuItemDataType[]>([])
    const { t } = useLanguage();
    
    // Create translated menu data
    const getTranslatedMenuData = (originalData: MenuItemDataType[]) => {
        return originalData.map(item => ({
            ...item,
            title: item.title === 'Home' ? t(navigationI18nData.menu.home) :
                   item.title === 'About' ? t(navigationI18nData.menu.about) :
                   item.title === 'Services' ? t(navigationI18nData.menu.services) :
                   item.title === 'Projects' ? t(navigationI18nData.menu.projects) :
                   item.title === 'Team' ? t(navigationI18nData.menu.team) :
                   item.title === 'Blog' ? t(navigationI18nData.menu.blog) :
                   item.title === 'Contact' ? t(navigationI18nData.menu.contact) :
                   item.title
        }));
    };
    
    useEffect(() => {
        let originalData;
        if (pathName === '/home-three-single' || pathName === '/home-four-single') {
            originalData = menuDataSingleHomePage;
        } else {
            originalData = menuData;
        }
        setData(getTranslatedMenuData(originalData));
    }, [pathName, t])
    
    return (
        <ul>
            {data.map(({ link, title, megamenu, submenu }, index) => (
                <li key={index} className={`${index === 0 ? 'active' : ''} ${index !== 0 && megamenu ? 'menu-thumb' : ''} ${index !== 0 && submenu ? 'has-dropdown' : ''}`}>
                    <Link to={link}>
                        {title}{' '}
                        {
                            index !== 0 && (megamenu || submenu) ? <i className="fas fa-angle-down" /> : ''
                        }
                    </Link>
                    {
                        index !== 0 && megamenu?.length && (
                            <ul className="submenu has-homemenu">
                                <li className="homemenu-items">
                                    {
                                        megamenu.map(({ image, links, title }, index) => (
                                            <div key={index} className="homemenu">
                                                <div className="homemenu-thumb">
                                                    <img src={image} alt="img" />
                                                    <div className="demo-button">
                                                        {
                                                            links.map(({ link, title }, ind) => (
                                                                <Link key={ind} to={link} className="theme-btn">
                                                                    <span>{title}</span>
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className="homemenu-content text-center">
                                                    <h4 className="homemenu-title">
                                                        {title}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </li>
                            </ul>
                        )
                    }
                    {
                        index !== 0 && submenu?.length && (
                            <ul className="submenu">
                                {
                                    submenu.map((dropdown, ind) => {
                                        return (
                                            <Fragment key={ind}>
                                                {
                                                    dropdown.submenu ?
                                                        <li className="has-dropdown">
                                                            <Link to="#">
                                                                {dropdown.title}
                                                                {' '}<i className="fas fa-angle-down" />
                                                            </Link>
                                                            <ul className="submenu">
                                                                {
                                                                    dropdown.submenu.map((subDropdown, index) =>
                                                                        <li key={index}><Link to={subDropdown.link}>{subDropdown.title}</Link></li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                        :
                                                        <li ><Link to={dropdown.link}>{dropdown.title}</Link></li>
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                            </ul>
                        )
                    }
                </li >
            ))
            }
        </ul >
    );
}

export default Navbar;