import { Link } from "react-router-dom"
import { useLanguage } from "@/hooks/useLanguage"
import { sectionTitlesI18nData } from "@/db/i18n/sectionsData"
import { navigationI18nData } from "@/db/i18n/navigationData"

const NewsLetterTwo = () => {
    const { t } = useLanguage();
    
    return (
        <div className="cta-banner-2 section-padding">
            <div className="container">
                <div className="cta-wrapper-2">
                    <div className="author-icon">
                        <div className="icon">
                            <i className="fa-solid fa-phone" />
                        </div>
                        <div className="content">
                            <span>{t(navigationI18nData.contact.callUs)}</span>
                            <h4>
                                <Link to="tel:+34606690792">+34 606 69 07 92</Link>
                            </h4>
                        </div>
                    </div>
                    <h3>
                        <span dangerouslySetInnerHTML={{ __html: t(sectionTitlesI18nData.cta.title) }} />
                    </h3>
                    <Link to="/contact" className="theme-btn bg-white">
                        {t(sectionTitlesI18nData.cta.buttonText)}
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterTwo