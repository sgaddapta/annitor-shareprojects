import { serviceThreeData } from "@/db/serviceThreeData"
import NewsLetterTwo from "../newsLetterTwo"
import ServiceCardTwo from "./serviceCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"
import { useLanguage } from "@/hooks/useLanguage"
import { sectionTitlesI18nData } from "@/db/i18n/sectionsData"

const ServicesThree = () => {
    const { t } = useLanguage();
    
    return (
        <section id="services" className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-3.jpg")' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>{t(sectionTitlesI18nData.services.subtitle)}</SectionTitle.SubTitle>
                        <h2 className="wow slideUp" data-delay=".3" dangerouslySetInnerHTML={{ __html: t(sectionTitlesI18nData.services.title) }} />
                    </SectionTitle>
                   
                </div>
                <div className="row">
                    {serviceThreeData.slice(0, 4).map((service) => (
                        <div key={service.id} className="col-xl-3 col-lg-4 col-md-6">
                            <ServiceCardTwo service={service} />
                        </div>
                    ))}
                </div>
            </div>
            <NewsLetterTwo />
        </section>

    )
}

export default ServicesThree