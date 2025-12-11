import PageTitle from "@/components/sections/pageTitle"
import ServiceSidebar from "@/components/sections/services/serviceSidebar"
import { useLanguage } from "@/hooks/useLanguage"

const faq = [
    {
        question: "What exactly is a Battery Energy Storage System (BESS)?",
        answer: "A BESS is a technology that stores electrical energy in large-scale batteries so it can be used later when demand is high, when renewable generation is low, or during power outages. It ensures a reliable and uninterrupted energy supply.",
        delay: ".3"
    },
    {
        question: "Why should my business or project consider installing a BESS?",
        answer: "By integrating a BESS, you gain energy independence, reduce electricity costs, and maximize the use of renewable sources like solar or wind. It also provides backup power, helping your operations remain stable even in case of grid failures.",
        delay: ".5"
    },
    {
        question: "How has BESS technology evolved in recent years?",
        answer: "BESS has rapidly advanced from small pilot projects to highly efficient, scalable, and cost-effective systems. Modern batteries are safer, have longer lifespans, and come with intelligent software for energy management, making them a strategic asset for companies and communities.",
        delay: ".7",
        expanded: true
    },
    {
        question: "Is a BESS suitable for my type of project?",
        answer: "Yes. BESS can be tailored for different needs—whether residential, commercial, industrial, or utility-scale projects. The system is fully scalable, meaning it can grow with your future energy requirements.",
        delay: ".7"
    },
    {
        question: "What are the long-term benefits of investing in BESS?",
        answer: "Beyond cost savings, BESS helps you achieve sustainability goals by reducing your carbon footprint. It also provides resilience against rising energy prices and ensures continuous power availability, positioning your business at the forefront of the energy transition.",
        delay: ".7"
    }
]
const ServiceDetailsBess = () => {
    const { t } = useLanguage();
    return (
        <>
            <PageTitle title={t({es: "Almacenamiento de Energía (BESS)", en: "Energy Storage (BESS)", fr: "Stockage d'énergie (BESS)", it: "Accumulo di energia (BESS)"})} currentPage={t({es: "Almacenamiento de Energía (BESS)", en: "Energy Storage (BESS)", fr: "Stockage d'énergie (BESS)", it: "Accumulo di energia (BESS)"})} />
            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4 order-2 order-md-1" style={{ display: 'none' }}>
                                <ServiceSidebar />
                            </div>
                            <div className="col-12 col-lg-12 order-1 order-md-2">
                                <div className="service-details-items">
                                    <div className="details-image">
                                        <img src="/img/service/details-1.jpg" alt="img" />
                                    </div>
                                    <div className="details-content">
                                        <h3>{t({es: "Sistemas de Almacenamiento de Energía con Baterías (BESS)", en: "Battery Energy Storage Systems (BESS)", fr: "Systèmes de stockage d'énergie par batterie (BESS)", it: "Sistemi di accumulo di energia a batteria (BESS)"})}</h3>
                                        <p className="mt-3">
                                            {t({es: "En el panorama energético actual, los sistemas de almacenamiento de energía con baterías (BESS) se han convertido en una de las tendencias más importantes que impulsan el futuro de la sostenibilidad y la fiabilidad. A medida que el mundo transita hacia fuentes de energía renovable como la solar y eólica, la necesidad de energía estable y consistente nunca ha sido tan grande. La generación renovable es inherentemente variable, y aquí es donde el almacenamiento de energía entra en juego: asegurando que la energía que producimos hoy se pueda utilizar exactamente cuando se necesita, de día o de noche.", en: "In today’s energy landscape, Battery Energy Storage Systems (BESS) have become one of the most important trends driving the future of sustainability and reliability. As the world transitions to renewable energy sources such as solar and wind, the need for stable and consistent power has never been greater. Renewable generation is inherently variable, and this is where energy storage steps in—ensuring that the energy we produce today can be used exactly when it is needed, day or night.", fr: "Dans le paysage énergétique actuel, les systèmes de stockage d'énergie par batterie (BESS) sont devenus l'une des tendances les plus importantes qui façonnent l'avenir de la durabilité et de la fiabilité. Alors que le monde transitionne vers des sources d'énergie renouvelable telles que le solaire et l'éolien, le besoin d'une énergie stable et constante n'a jamais été aussi pressant. La génération renouvelable est intrinsèquement variable, et c'est là qu'intervient le stockage d'énergie : en garantissant que l'énergie que nous produisons aujourd'hui peut être utilisée exactement au moment où elle est nécessaire, de jour comme de nuit.", it: "Nel panorama energetico attuale, i sistemi di accumulo di energia a batteria (BESS) sono diventati una delle tendenze più importanti che guidano il futuro della sostenibilità e dell'affidabilità. Con il passaggio del mondo a fonti di energia rinnovabile come il solare e l'eolico, la necessità di energia stabile e coerente non è mai stata così grande. La generazione rinnovabile è intrinsecamente variabile, ed è qui che entra in gioco lo stoccaggio dell'energia: garantendo che l'energia che produciamo oggi possa essere utilizzata esattamente quando è necessaria, giorno e notte."})}
                                        </p>
                                        <p className="mt-3">
                                            {t({es: "En la última década, la tecnología BESS ha evolucionado rápidamente. Lo que comenzó como sistemas experimentales a pequeña escala se ha convertido en una solución probada y madura desplegada en industrias, negocios e incluso en proyectos de servicios públicos a gran escala en todo el mundo. Los sistemas de almacenamiento modernos son más seguros, eficientes y rentables que nunca. Ofrecen no solo la capacidad de almacenar energía, sino también características avanzadas como el recorte de picos, la estabilización de la red, la respuesta a la demanda y la energía de respaldo en caso de cortes.", en: "Over the last decade, BESS technology has evolved rapidly. What began as small-scale, experimental systems has now become a mature, proven solution deployed in industries, businesses, and even large-scale utility projects around the world. Modern storage systems are safer, more efficient, and more cost-effective than ever before. They offer not only the ability to store energy but also advanced features such as peak shaving, grid stabilization, demand response, and backup power in case of outages.", fr: "Au cours de la dernière décennie, la technologie BESS a évolué rapidement. Ce qui a commencé comme des systèmes expérimentaux à petite échelle est maintenant devenu une solution mature et éprouvée déployée dans des industries, des entreprises et même des projets d'utilité publique à grande échelle dans le monde entier. Les systèmes de stockage modernes sont plus sûrs, plus efficaces et plus rentables que jamais. Ils offrent non seulement la capacité de stocker de l'énergie, mais aussi des fonctionnalités avancées telles que l'effacement des pics, la stabilisation du réseau, la réponse à la demande et l'alimentation de secours en cas de panne.", it: "Negli ultimi dieci anni, la tecnologia BESS è evoluta rapidamente. Ciò che è iniziato come sistemi sperimentali su piccola scala è ora diventato una soluzione matura e collaudata utilizzata in industrie, aziende e persino in progetti di servizi pubblici su larga scala in tutto il mondo. I moderni sistemi di stoccaggio sono più sicuri, più efficienti e più convenienti che mai. Offrono non solo la capacità di immagazzinare energia, ma anche funzionalità avanzate come il taglio dei picchi, la stabilizzazione della rete, la risposta alla domanda e l'alimentazione di emergenza in caso di interruzioni."})}
                                        </p>
                                        <br />
                                        <h4 className="mt-4">{t({es: "Los beneficios para empresas y comunidades son claros:", en: "The benefits for businesses and communities are clear:", fr: "Les avantages pour les entreprises et les communautés sont clairs:", it: "I vantaggi per le aziende e le comunità sono chiari:"})}</h4>
                                        <br />
                                        <ul className="list">
                                            <li>
                                                <strong>{t({es: "Independencia y resiliencia energética", en: "Energy independence and resilience", fr: "Indépendance et résilience énergétique", it: "Indipendenza e resilienza energetica"})}</strong> – {t({es: "reducción de la dependencia de la red y mayor seguridad energética.", en: "reduced grid dependence and greater energy security.", fr: "réduction de la dépendance au réseau et sécurité énergétique accrue.", it: "riduzione della dipendenza dalla rete e maggiore sicurezza energetica."})}
                                            </li>
                                            <li>
                                                <strong>{t({es: "Optimización de costos", en: "Cost optimization", fr: "Optimisation des coûts", it: "Ottimizzazione dei costi"})}</strong> – {t({es: "almacenamiento de energía cuando es más barata o cuando se produce excedente.", en: "store energy when it’s cheaper or when there’s surplus production.", fr: "stockage d'énergie lorsque c'est moins cher ou en cas de surproduction.", it: "accumulo di energia quando è più economica o quando c'è produzione in eccesso."})}
                                            </li>
                                            <li>
                                                <strong>{t({es: "Sostenibilidad", en: "Sustainability", fr: "Durabilité", it: "Sostenibilità"})}</strong> – {t({es: "maximización del uso de energía renovable, reducción de huellas de carbono.", en: "maximize renewable energy use, reduce carbon footprints.", fr: "maximisation de l'utilisation des énergies renouvelables, réduction de l'empreinte carbone.", it: "massimizzazione dell'uso di energia rinnovabile, riduzione dell'impronta di carbonio."})}
                                            </li>
                                            <li>
                                                <strong>{t({es: "Flexibilidad", en: "Flexibility", fr: "Flexibilité", it: "Flessibilità"})}</strong> – {t({es: "los sistemas se pueden adaptar para aplicaciones residenciales, comerciales o industriales.", en: "systems can be adapted for residential, commercial, or industrial applications.", fr: "les systèmes peuvent être adaptés à des applications résidentielles, commerciales ou industrielles.", it: "i sistemi possono essere adattati per applicazioni residenziali, commerciali o industriali."})}
                                            </li>
                                        </ul>
                                        <p className="mt-3">
                                            {t({es: "Hoy en día, gobiernos, corporaciones y comunidades de todo el mundo están invirtiendo en BESS no solo como apoyo a la energía renovable, sino como un activo estratégico para el futuro de la seguridad energética. La tecnología sigue avanzando, con baterías de mayor capacidad, vidas útiles más largas y software de gestión más inteligente que permite una integración completa en los modernos sistemas energéticos.", en: "Today, governments, corporations, and communities around the world are investing in BESS not only as a support for renewable energy but as a strategic asset for the future of energy security. The technology continues to advance, with higher-capacity batteries, longer lifespans, and smarter management software that allows full integration into modern energy systems.", fr: "Aujourd'hui, gouvernements, entreprises et collectivités du monde entier investissent dans le BESS non seulement comme un soutien aux énergies renouvelables, mais aussi comme un atout stratégique pour l'avenir de la sécurité énergétique. La technologie continue d'évoluer, avec des batteries de plus grande capacité, une durée de vie plus longue et un logiciel de gestion plus intelligent permettant une intégration complète dans les systèmes énergétiques modernes.", it: "Oggi, governi, aziende e comunità di tutto il mondo stanno investendo nel BESS non solo come supporto alle energie rinnovabili, ma anche come un attivo strategico per il futuro della sicurezza energetica. La tecnologia continua ad avanzare, con batterie di maggiore capacità, cicli di vita più lunghi e software di gestione più intelligenti che consentono un'integrazione completa nei moderni sistemi energetici."})}
                                        </p>
                                        <p className="mt-3">
                                            {t({es: "En su esencia, el almacenamiento de energía se trata de una poderosa promesa: garantizar que la energía de la que depende nunca se agote. Ya sea apoyando la integración de energías renovables, proporcionando estabilidad a la red o dando a las empresas la confianza de operaciones ininterrumpidas, BESS ya no es la tecnología del mañana: es la solución del hoy.", en: "At its core, energy storage is about one powerful promise: ensuring that the energy you rely on never goes out. Whether supporting renewable integration, providing stability to the grid, or giving businesses the confidence of uninterrupted operations, BESS is no longer the technology of tomorrow—it is the solution of today.", fr: "Au cœur du stockage d'énergie se trouve une promesse puissante : garantir que l'énergie sur laquelle vous comptez ne s'épuise jamais. Que ce soit pour soutenir l'intégration des énergies renouvelables, fournir de la stabilité au réseau ou donner aux entreprises la confiance d'opérations ininterrompues, le BESS n'est plus la technologie de demain : c'est la solution d'aujourd'hui.", it: "Alla base dello stoccaggio dell'energia c'è una potente promessa: garantire che l'energia su cui fai affidamento non si esaurisca mai. Sia che si tratti di supportare l'integrazione delle energie rinnovabili, di fornire stabilità alla rete o di dare alle aziende la certezza di operazioni ininterrotte, il BESS non è più la tecnologia di domani: è la soluzione di oggi."})}
                                        </p>
                                        <br />
                                        <h3>{t({es: "¿Pregunta más comentada?", en: "Most Comment Question?", fr: "Question la plus posée?", it: "Domanda più frequente?"})}</h3>
                                        <p className="mt-3">
                                            {t({es: "¿Tienes curiosidad por saber cómo funcionan los sistemas de almacenamiento de energía con baterías, sus beneficios o cómo pueden encajar en tu proyecto? ¡Contáctanos para una consulta personalizada!", en: "Curious about how battery energy storage systems work, their benefits, or how they can fit into your project? Contact us for a personalized consultation!", fr: "Vous êtes curieux de savoir comment fonctionnent les systèmes de stockage d'énergie par batterie, leurs avantages ou comment ils peuvent s'intégrer à votre projet ? Contactez-nous pour une consultation personnalisée !", it: "Sei curioso di sapere come funzionano i sistemi di accumulo di energia a batteria, i loro vantaggi o come possono adattarsi al tuo progetto? Contattaci per una consulenza personalizzata!"})}
                                        </p>
                                    </div>
                                </div>
                                <div className="faq-content style-3">
                                    <div className="faq-accordion">
                                        <div className="accordion" id="accordion">
                                            {faq.map((item, index) => (
                                                <div className={`accordion-item mb-3 wow slideUp`} data-delay={item.delay} key={index}>
                                                    <h5 className="accordion-header">
                                                        <button className={`accordion-button ${item.expanded ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`} aria-expanded={item.expanded ? "true" : "false"} aria-controls={`faq${index}`}>
                                                            {item.question}
                                                        </button>
                                                    </h5>
                                                    <div id={`faq${index}`} className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`} data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            {item.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetailsBess
