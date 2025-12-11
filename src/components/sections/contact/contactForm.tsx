import { useLanguage } from "@/hooks/useLanguage"
import { contactI18nData } from "@/db/i18n/contactData"

const ContactForm = () => {
    const { t } = useLanguage();
    
    return (
        <div className="contact-content">
            <h2>{t(contactI18nData.formTitle)}</h2>
            <p>
                {t(contactI18nData.formSubtitle)}
            </p>
            <form action="contact.php" id="contact-form" method="POST" className="contact-form-items">
                <div className="row g-4">
                    <div className="col-lg-6 wow slideUp" data-delay=".3">
                        <div className="form-clt">
                            <span>{t(contactI18nData.formFields.name)}</span>
                            <input type="text" name="name" id="name" placeholder={t(contactI18nData.placeholders.name)} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".5">
                        <div className="form-clt">
                            <span>{t(contactI18nData.formFields.email)}</span>
                            <input type="text" name="email" id="email" placeholder={t(contactI18nData.placeholders.email)} />
                        </div>
                    </div>
                    <div className="col-lg-12 wow slideUp" data-delay=".7">
                        <div className="form-clt">
                            <span>{t(contactI18nData.formFields.message)}</span>
                            <textarea name="message" id="message" placeholder={t(contactI18nData.placeholders.message)} defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-lg-7 wow slideUp" data-delay=".9">
                        <button type="submit" className="theme-btn">
                            {t(contactI18nData.formFields.submit)} <i className="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ContactForm