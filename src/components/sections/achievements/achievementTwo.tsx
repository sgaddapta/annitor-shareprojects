import SectionTitle from "@/components/ui/sectionTitle";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage"
import { achievementI18nData } from "@/db/i18n/achievementData"
import { sectionTitlesI18nData } from "@/db/i18n/sectionsData"

const AchievementTwo = ({ achievementWrapperClass, className }: { achievementWrapperClass?: string, className?: string }) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    });
    const { t } = useLanguage();
    
    return (
        <section className={`achievement-section-2 fix ${className}`}>
            <div className="container">
                <div className={`achievement-wrapper ${achievementWrapperClass}`}>
                    <SectionTitle className="mb-0">
                        <SectionTitle.SubTitle className="text-white">{t(sectionTitlesI18nData.achievement.subtitle)}</SectionTitle.SubTitle>
                        <SectionTitle.Title className="text-white">{t(sectionTitlesI18nData.achievement.title)}</SectionTitle.Title>
                    </SectionTitle>
                    <div className="counter-area" ref={ref}>
                        {achievementI18nData.map((item) => (
                            <div
                                key={item.id}
                                className="counter-items wow slideUp"
                                data-delay={item.delay}
                            >
                                <div className="icon">
                                    <img src={item.icon} alt="icon-img" />
                                </div>
                                <div className="content">
                                    {
                                        inView &&
                                        <h2>
                                            <span className="count"><CountUp end={item.count} /></span>+
                                        </h2>
                                    }
                                    <p>{t(item.description)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AchievementTwo