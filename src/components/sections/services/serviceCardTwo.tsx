import { ServiceDataType } from "@/db/serviceOneData"
import { Link } from "react-router-dom"
import { useLanguage } from "@/hooks/useLanguage"
import { servicesI18nData } from "@/db/i18n/servicesData"

const ServiceCardTwo = ({ service }: { service: ServiceDataType }) => {
    const { t } = useLanguage();
    
    // Find the corresponding i18n data
    const serviceI18n = servicesI18nData.find(s => s.id === service.id);
    
    return (
        <div className="service-card-items">
            <div className="service-image">
                <img src={service.image || serviceI18n?.image} alt="service-img" />
            </div>
            <div className="icon-2">
                <img src={service.icon} alt="img" />
            </div>
            <div className="service-content">
                <div className="icon">
                    <img src={service.icon} alt="img" />
                </div>
                <h4>
                    <Link to={service.link}>
                        {serviceI18n ? t(serviceI18n.title) : service.title}
                    </Link>
                </h4>
                <p>{serviceI18n ? t(serviceI18n.description) : service.description}</p>
                <Link to={service.link} className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceCardTwo