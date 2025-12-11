import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from "motion/react"
import { useLanguage } from "@/hooks/useLanguage"
import { heroSlidesData } from "@/db/i18n/heroData"

const HeroThree = () => {
    const { t } = useLanguage();
    
    return (
        <section className="hero-section hero-3">
            <div className="array-button">
                <button className="array-prev"><i className="fa fa-arrow-left" /></button>
                <button className="array-next"><i className="fa fa-arrow-right" /></button>
            </div>
            <Swiper
                loop={true}
                slidesPerView={1}
                effect="fade"
                speed={3000}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".dot-2",
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                }}
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
            >
                {heroSlidesData.map((slide) => (
                    <SwiperSlide key={slide.id} >

                        {(({ isActive }) => (
                            <>
                                <div
                                    className="hero-image bg-cover"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                />
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isActive ? 1 : 0 }}
                                                className="hero-content text-center"
                                            >
                                                <motion.h6
                                                    className="text-white"
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{ y: isActive ? '0' : 40, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.2,
                                                        ease: 'linear',
                                                    }}
                                                >
                                                    {t(slide.subtitle)}
                                                </motion.h6>
                                                <motion.h1
                                                    className="text-white"
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{ y: isActive ? '0' : 40, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.3,
                                                        ease: 'linear',
                                                    }}
                                                >
                                                    {t(slide.title)}
                                                </motion.h1>
                                                <motion.h2
                                                    className="text-white"
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{ y: isActive ? '0' : 40, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.4,
                                                        ease: 'linear',
                                                    }}
                                                >
                                                    Technique, in business since 1989
                                                </motion.h2>
                                                <motion.div
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{ y: isActive ? '0' : 40, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.5,
                                                        ease: 'linear',
                                                    }}
                                                    className="hero-button"
                                                >
                                                    
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >

    )
}

export default HeroThree