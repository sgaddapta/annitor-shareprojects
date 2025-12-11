import PageTitle from "@/components/sections/pageTitle"
import ServiceSidebar from "@/components/sections/services/serviceSidebar"
import { useLanguage } from "@/hooks/useLanguage"

const faq = [
    {
        question: "What is Hydrogen Energy?",
        answer: "Hydrogen energy refers to the use of hydrogen as a clean fuel for electricity, heating, and transportation. When used in fuel cells, hydrogen produces only water as a byproduct, making it a zero-emission energy source.",
        delay: ".3"
    },
    {
        question: "Why is hydrogen important for the energy transition?",
        answer: "Hydrogen can be produced from renewable sources and used to store and transport energy. It helps decarbonize sectors that are hard to electrify, such as heavy industry and long-haul transport.",
        delay: ".5"
    },
    {
        question: "How is hydrogen produced?",
        answer: "Hydrogen can be produced through electrolysis (using electricity to split water) or from natural gas with carbon capture. Green hydrogen, made from renewables, is the most sustainable option.",
        delay: ".7",
        expanded: true
    },
    {
        question: "Is hydrogen safe to use?",
        answer: "Hydrogen is safe when handled properly. It is non-toxic and dissipates quickly in air. Modern systems use strict safety standards for production, storage, and transport.",
        delay: ".7"
    },
    {
        question: "What are the benefits of hydrogen energy?",
        answer: "Hydrogen enables clean energy storage, supports renewable integration, and can be used in fuel cells for vehicles, buildings, and industry. It reduces emissions and increases energy security.",
        delay: ".7"
    }
]
const ServiceDetailsHidrogen = () => {
    const { t } = useLanguage();
    return (
        <>
            <PageTitle title={t({es: "Energía de Hidrógeno", 
                    en: "Hydrogen Energy", 
                    fr: "Énergie hydrogène", 
                    it: "Energia dell'idrogeno"})} currentPage={t({
                        es: "Energía de Hidrógeno", 
                        en: "Hydrogen Energy", 
                        fr: "Énergie hydrogène", 
                        it: "Energia dell'idrogeno"})} />
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
                                        <img src="/img/service/details-hydrogen.jpg" alt="img" />
                                    </div>
                                    <div className="details-content">
                                        <h3>{t({
                                            es: "El hidrógeno verde: la energía del futuro que ya está aquí", 
                                            en: "Green hydrogen: the energy of the future that is already here", 
                                            fr: "L'hydrogène vert : l'énergie du futur qui est déjà là", 
                                            it: "L'idrogeno verde: l'energia del futuro che è già qui"})}
                                        </h3>
                                        <br />
                                        <h4 className="mt-4">{t({
                                            es: "La evolución de la tecnología", 
                                            en: "The evolution of technology", 
                                            fr: "L'évolution de la technologie", 
                                            it: "L'evoluzione della tecnologia"})}</h4>
                                        <br />
                                        <p className="mt-3">
                                            <span dangerouslySetInnerHTML={{
                                                __html: t({
                                                    es: "Durante décadas, el hidrógeno se ha utilizado como materia prima en industrias como la química o la refinería, pero casi siempre producido a partir de combustibles fósiles (hidrógeno gris), lo que conlleva elevadas emisiones de CO₂. </br> Con el avance de las energías renovables y la electrólisis del agua, hoy es posible generar hidrógeno de forma limpia, únicamente con electricidad procedente de fuentes como la solar o la eólica.La tecnología de electrólisis ha experimentado una notable madurez en los últimos años:",
                                                    en: "For decades, hydrogen has been used as a raw material in industries such as chemicals and refineries, but almost always produced from fossil fuels (grey hydrogen), resulting in high CO₂ emissions. </br> With the advancement of renewable energies and water electrolysis, it is now possible to generate hydrogen cleanly, using only electricity from sources such as solar or wind. Electrolysis technology has matured significantly in recent years:",
                                                    fr: "Pendant des décennies, l'hydrogène a été utilisé comme matière première dans des industries telles que la chimie ou la raffinerie, mais presque toujours produit à partir de combustibles fossiles (hydrogène gris), ce qui entraîne des émissions élevées de CO₂. </br> Avec le développement des énergies renouvelables et de l'électrolyse de l'eau, il est désormais possible de produire de l'hydrogène proprement, uniquement avec de l'électricité provenant de sources telles que le solaire ou l'éolien. La technologie de l'électrolyse a connu une maturité remarquable ces dernières années :",
                                                    it: "Per decenni, l'idrogeno è stato utilizzato come materia prima in industrie come quella chimica o la raffinazione, ma quasi sempre prodotto da combustibili fossili (idrogeno grigio), con elevate emissioni di CO₂. </br> Con il progresso delle energie rinnovabili e dell'elettrolisi dell'acqua, oggi è possibile generare idrogeno in modo pulito, utilizzando solo elettricità proveniente da fonti come il solare o l'eolico. La tecnologia dell'elettrolisi ha raggiunto una notevole maturità negli ultimi anni:"
                                                })
                                            }} />
                                        </p>
                                        <p className="mt-3">
                                            <span dangerouslySetInnerHTML={{
                                                __html: t({
                                                    es: "<ul><li>- Mayor eficiencia energética.</li><li>- Reducción de costes gracias a la escalabilidad.</li><li>- Integración con sistemas híbridos que combinan fotovoltaica, eólica y almacenamiento en baterías.</li></ul>",
                                                    en: "<ul><li>- Higher energy efficiency.</li><li>- Cost reduction thanks to scalability.</li><li>- Integration with hybrid systems that combine photovoltaic, wind, and battery storage.</li></ul>",
                                                    fr: "<ul><li>- Meilleure efficacité énergétique.</li><li>- Réduction des coûts grâce à l'évolutivité.</li><li>- Intégration avec des systèmes hybrides combinant photovoltaïque, éolien et stockage sur batteries.</li></ul>",
                                                    it: "<ul><li>- Maggiore efficienza energetica.</li><li>- Riduzione dei costi grazie alla scalabilità.</li><li>- Integrazione con sistemi ibridi che combinano fotovoltaico, eolico e stoccaggio in batterie.</li></ul>"
                                                })
                                            }} />
                                        </p>
                                        <p className="mt-3">
                                            {t({es: "Esto sitúa al hidrógeno verde como un vector energético clave para la transición energética global.", 
                                                en: "This positions green hydrogen as a key energy vector for the global energy transition.", 
                                                fr: "Cela positionne l'hydrogène vert comme un vecteur énergétique clé pour la transition énergétique mondiale.", 
                                                it: "Questo posiziona l'idrogeno verde come un vettore energetico chiave per la transizione energetica globale."
                                            })}
                                        </p>
                                        <br />
                                        <h4 className="mt-4">{t({
                                                es: "¿Por qué es tan interesante implementar esta tecnología ahora?", 
                                                en: "Why is it so interesting to implement this technology now?", 
                                                fr: "Pourquoi est-il si intéressant d'implémenter cette technologie maintenant ?", 
                                                it: "Perché è così interessante implementare questa tecnologia ora:"
                                            })}</h4>
                                        <br />
                                        <p className="mt-3">
                                            {t({es: "El momento actual reúne tres factores que hacen que el hidrógeno verde sea más atractivo que nunca:", 
                                                en: "The current moment brings together three factors that make green hydrogen more attractive than ever:", 
                                                fr: "Le moment actuel réunit trois facteurs qui rendent l'hydrogène vert plus attrayant que jamais :", 
                                                it: "Il momento attuale riunisce tre fattori che rendono l'idrogeno verde più attraente che mai:"
                                            })}
                                        </p>
                                        <ul className="list">
                                            <li>
                                                <strong>{t({
                                                    es: "1. Disponibilidad de renovables baratas: ", 
                                                    en: "1. Availability of cheap renewables: ", 
                                                    fr: "1. Disponibilité des renouvelables bon marché: ", 
                                                    it: "1. Disponibilità di rinnovabili a buon mercato: "
                                                })}</strong>
                                                {t({
                                                    es: "los costes de generación solar y eólica han caído drásticamente en la última década.",
                                                    en: "The costs of solar and wind generation have dropped dramatically in the last decade.",
                                                    fr: "Les coûts de production solaire et éolienne ont chuté de façon spectaculaire au cours de la dernière décennie.",
                                                    it: "I costi di generazione solare ed eolica sono diminuiti drasticamente nell'ultimo decennio."
                                                })}
                                            </li>
                                        </ul>
                                        <ul className="list">
                                            <li>
                                                <strong>{t({
                                                    es: "2. Necesidad de descarbonización: ", 
                                                    en: "2. Need for decarbonization: ", 
                                                    fr: "2. Besoin de décarbonisation: ", 
                                                    it: "2. Necessità di decarbonizzazione: "
                                                })}</strong>
                                                {t({
                                                    es: "sectores industriales y de transporte que no pueden electrificarse directamente requieren una alternativa libre de emisiones.",
                                                    en: "industrial and transport sectors that cannot be directly electrified require an emission-free alternative.",
                                                    fr: "les secteurs industriels et des transports qui ne peuvent pas être électrifiés directement ont besoin d'une alternative sans émissions.",
                                                    it: "i settori industriali e dei trasporti che non possono essere elettrificati direttamente necessitano di un'alternativa a zero emissioni."
                                                })}
                                            </li>
                                        </ul>
                                        <ul className="list">
                                            <li>
                                                <strong>{t({
                                                    es: "3. Apoyo institucional y financiero: ", 
                                                    en: "3. Institutional and financial support: ", 
                                                    fr: "3. Soutien institutionnel et financier: ", 
                                                    it: "3. Sostegno istituzionale e finanziario: "
                                                })}</strong>
                                                {t({
                                                    es: "programas europeos e internacionales promueven la inversión en proyectos de hidrógeno como parte esencial de las estrategias de neutralidad climática.",
                                                    en: "European and international programs promote investment in hydrogen projects as an essential part of climate neutrality strategies.",
                                                    fr: "Les programmes européens et internationaux encouragent l'investissement dans des projets d'hydrogène comme élément essentiel des stratégies de neutralité climatique.",
                                                    it: "I programmi europei e internazionali promuovono investimenti in progetti di idrogeno come parte essenziale delle strategie di neutralità climatica."
                                                })}
                                            </li>
                                        </ul>
                                        <p className="mt-3">
                                            {t({es: "El resultado es una tecnología con un fuerte respaldo, viable económicamente y fundamental para alcanzar los objetivos de sostenibilidad.", 
                                                en: "The result is a technology with strong backing, economically viable, and essential for achieving sustainability goals.", 
                                                fr: "Le résultat est une technologie bénéficiant d'un fort soutien, économiquement viable et essentielle pour atteindre les objectifs de durabilité.", 
                                                it: "Il risultato è una tecnologia con un forte sostegno, economicamente sostenibile e fondamentale per raggiungere gli obiettivi di sostenibilità."})}
                                        </p>
                                        <br />
                                        <h4 className="mt-4">{t({
                                            es: "Aplicaciones del hidrogeno verde producido", 
                                            en: "Applications of produced green hydrogen", 
                                            fr: "Applications de l'hydrogène vert produit", 
                                            it: "Applicazioni dell'idrogeno verde prodotto"})}</h4>
                                        <br />

                                        <ul className="list">
                                            <li>
                                                <strong>{t({
                                                    es: "1. Almacenamiento de energía a largo plazo: ", 
                                                    en: "1. Long-term energy storage: ", 
                                                    fr: "1. Stockage d'énergie à long terme: ", 
                                                    it: "1. Stoccaggio energetico a lungo termine: "
                                                })}</strong>
                                                <ul>
                                                    <li>
                                                        {t({
                                                            es: "Permite guardar excedentes renovables en forma química, solucionando el reto de la intermitencia solar y eólica.",
                                                            en: "Allows storing renewable surpluses in chemical form, addressing the challenge of solar and wind intermittency.",
                                                            fr: "Permet de stocker les surplus renouvelables sous forme chimique, répondant au défi de l'intermittence solaire et éolienne.",
                                                            it: "Consente di immagazzinare gli eccessi rinnovabili sotto forma chimica, affrontando la sfida dell'intermittenza solare ed eolica."
                                                        })}
                                                    </li>
                                                    <li>
                                                        {t({
                                                            es: "Es el “almacén” ideal para equilibrar la red a largo plazo y garantizar la seguridad energética. Especialmente en los casos en los que la producción de energía varía mucho entre las estaciones del año",
                                                            en: "It is the ideal “store” to balance the grid in the long term and ensure energy security, especially in cases where energy production varies greatly between seasons.",
                                                            fr: "C'est le « stockage » idéal pour équilibrer le réseau à long terme et garantir la sécurité énergétique, en particulier dans les cas où la production d'énergie varie considérablement entre les saisons.",
                                                            it: "È il “magazzino” ideale per bilanciare la rete a lungo termine e garantire la sicurezza energetica, soprattutto nei casi in cui la produzione di energia varia notevolmente tra le stagioni."
                                                        })}
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <strong>{t({
                                                    es: "2. Materia prima industrial: ",
                                                    en: "2. Industrial feedstock: ",
                                                    fr: "2. Matière première industrielle: ",
                                                    it: "2. Materia prima industriale: "
                                                })}</strong>
                                                <ul>
                                                    <li>
                                                        {t({
                                                            es: "Sustituye al hidrógeno gris en la producción de fertilizantes, acero o combustibles sintéticos.",
                                                            en: "Substitutes gray hydrogen in the production of fertilizers, steel, or synthetic fuels.",
                                                            fr: "Remplace l'hydrogène gris dans la production d'engrais, d'acier ou de combustibles synthétiques.",
                                                            it: "Sostituisce l'idrogeno grigio nella produzione di fertilizzanti, acciaio o combustibili sintetici."
                                                        })}
                                                    </li>
                                                    <li>
                                                        {t({
                                                            es: "Reduce significativamente las emisiones en sectores industriales intensivos en carbono.",
                                                            en: "It significantly reduces emissions in carbon-intensive industrial sectors.",
                                                            fr: "Il réduit considérablement les émissions dans les secteurs industriels à forte intensité de carbone.",
                                                            it: "Riduce significativamente le emissioni nei settori industriali ad alta intensità di carbonio."
                                                        })}
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <strong>{t({
                                                    es: "3. Combustible para transporte pesado",
                                                    en: "3. Heavy-duty transport fuel: ",
                                                    fr: "3. Carburant pour le transport lourd: ",
                                                    it: "3. Combustibile per trasporti pesanti: "
                                                })}</strong>
                                                <ul>
                                                    <li>
                                                        {t({
                                                            es: "Con aplicaciones en camiones, autobuses, trenes e incluso barcos, donde las baterías no son una solución eficiente por peso o autonomía.",
                                                            en: "With applications in trucks, buses, trains, and even ships, where batteries are not an efficient solution due to weight or range.",
                                                            fr: "Avec des applications dans les camions, les bus, les trains et même les navires, où les batteries ne sont pas une solution efficace en raison du poids ou de l'autonomie.",
                                                            it: "Con applicazioni in camion, autobus, treni e persino navi, dove le batterie non sono una soluzione efficiente a causa del peso o dell'autonomia."
                                                        })}
                                                    </li>
                                                    <li>
                                                        {t({
                                                            es: "Contribuye a descarbonizar la movilidad de largo recorrido.",
                                                            en: "It contributes to decarbonizing long-haul mobility.",
                                                            fr: "Il contribue à décarboniser la mobilité longue distance.",
                                                            it: "Contribuisce a decarbonizzare la mobilità a lungo raggio."
                                                        })}
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                        
                                        <br />
                                        <h4 className="mt-4">{t({
                                            es: "Arquitectura habitual", 
                                            en: "Common Architecture", 
                                            fr: "Architecture Courante", 
                                            it: "Architettura Comune"})}</h4>
                                        <br />

                                        <div className="details-image" style={{ width: '50%', margin: '0 auto' }}>
                                            <img src="/img/service/Arquitectura_Base.png" alt="img" style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                        <br />

                                        <p className="mt-3">
                                            {t({es: "La Figura representa la arquitectura base utilizada habitualmente para la producción de hidrógeno verde. El diseño se centra en una planta de electrólisis aislada (off-grid) que recibe energía únicamente de fuentes renovables recién instaladas:", 
                                                en: "The figure represents the base architecture commonly used for green hydrogen production. The design focuses on an isolated (off-grid) electrolysis plant that receives energy solely from newly installed renewable sources:", 
                                                fr: "La figure représente l'architecture de base couramment utilisée pour la production d'hydrogène vert. La conception se concentre sur une usine d'électrolyse isolée (hors réseau) qui reçoit de l'énergie uniquement de sources renouvelables nouvellement installées:", 
                                                it: "La figura rappresenta l'architettura di base comunemente utilizzata per la produzione di idrogeno verde. Il design si concentra su un impianto di elettrolisi isolato (off-grid) che riceve energia esclusivamente da fonti rinnovabili appena installate:"
                                            })}
                                        </p>
                                        <br />

                                        <ul className="list">
                                            <li>
                                                <strong>{t({
                                                    es: "Planta solar fotovoltaica (FV): ", 
                                                    en: "Photovoltaic solar plant (PV): ", 
                                                    fr: "Centrale solaire photovoltaïque (PV): ", 
                                                    it: "Impianto solare fotovoltaico (FV): "
                                                })}</strong>
                                                
                                                {t({
                                                    es: "genera electricidad durante las horas de mayor irradiación, con gran variabilidad diaria y estacional.",
                                                    en: "Generates electricity during peak sunlight hours, with significant daily and seasonal variability.",
                                                    fr: "Génère de l'électricité pendant les heures d'ensoleillement maximal, avec une variabilité quotidienne et saisonnière importante.",
                                                    it: "Genera elettricità durante le ore di massima irradiazione solare, con una notevole variabilità giornaliera e stagionale."
                                                })}
                                                    
                                            </li>
                                            <li>
                                                <strong>{t({
                                                    es: "Parque eólico: ", 
                                                    en: "Wind farm: ", 
                                                    fr: "Parc éolien : ", 
                                                    it: "Parco eolico : "
                                                })}</strong>
                                                
                                                {t({
                                                    es: "aporta producción complementaria, especialmente en horarios y estaciones donde el recurso solar es insuficiente.",
                                                    en: "Provides complementary production, especially during hours and seasons when solar resources are insufficient.",
                                                    fr: "Apporte une production complémentaire, notamment pendant les heures et les saisons où les ressources solaires sont insuffisantes.",
                                                    it: "Fornisce una produzione complementare, specialmente durante le ore e le stagioni in cui le risorse solari sono insufficienti."
                                                })}
                                                    
                                            </li>

                                            <li>
                                                <strong>{t({
                                                    es: "Sistema de almacenamiento con baterías (BESS): ", 
                                                    en: "Battery Energy Storage System (BESS): ", 
                                                    fr: "Système de stockage d'énergie par batteries (BESS) : ", 
                                                    it: "Sistema di accumulo di energia con batterie (BESS) : "
                                                })}</strong>
                                                
                                                {t({
                                                    es: "almacena el exceso de electricidad renovable cuando el electrolizador no puede consumirla y la libera en momentos de déficit, mejorando la continuidad de operación.",
                                                    en: "Stores excess renewable electricity when the electrolyzer cannot consume it and releases it during deficit periods, improving operational continuity.",
                                                    fr: "Stocke l'excès d'électricité renouvelable lorsque l'électrolyseur ne peut pas l'utiliser et le libère pendant les périodes de déficit, améliorant ainsi la continuité de l'exploitation.",
                                                    it: "Memorizza l'eccesso di elettricità rinnovabile quando l'elettrolizzatore non può consumarlo e lo rilascia durante i periodi di deficit, migliorando la continuità operativa."
                                                })}
                                                    
                                            </li>

                                            <li>
                                                <strong>{t({
                                                    es: "Electrolizador: ", 
                                                    en: "Electrolyzer: ", 
                                                    fr: "Électrolyseur : ", 
                                                    it: "Elettrolizzatore : "
                                                })}</strong>
                                                
                                                {t({
                                                    es: "convierte el agua en hidrógeno y oxígeno mediante corriente eléctrica. La eficiencia de este proceso depende de la estabilidad del suministro eléctrico y del factor de utilización.",
                                                    en: "Converts water into hydrogen and oxygen using electrical current. The efficiency of this process depends on the stability of the power supply and the utilization factor.",
                                                    fr: "Convertit l'eau en hydrogène et en oxygène à l'aide d'un courant électrique. L'efficacité de ce processus dépend de la stabilité de l'alimentation électrique et du facteur d'utilisation.",
                                                    it: "Converte l'acqua in idrogeno e ossigeno utilizzando corrente elettrica. L'efficienza di questo processo dipende dalla stabilità dell'alimentazione elettrica e dal fattore di utilizzo."
                                                })}
                                                    
                                            </li>
                                        </ul>

                                        <br />

                                        <p className="mt-3">
                                            {t({es: "El esquema ilustra cómo se equilibran tres elementos clave:", 
                                                en: "The diagram illustrates how three key elements are balanced:", 
                                                fr: "Le schéma illustre comment trois éléments clés sont équilibrés :", 
                                                it: "Lo schema illustra come si bilanciano tre elementi chiave:"})}
                                        </p>
                                        <br />

                                        <ul className="list">
                                            <li>
                                                
                                                {t({
                                                    es: "1. La variabilidad natural de las fuentes renovables.",
                                                    en: "1. The natural variability of renewable sources.",
                                                    fr: "1. La variabilité naturelle des sources renouvelables.",
                                                    it: "1. La variabilità naturale delle fonti rinnovabili."
                                                })}
                                                    
                                            </li>
                                            <li>
                                                
                                                
                                                {t({
                                                    es: "2. El papel estratégico del almacenamiento para reducir pérdidas por vertido (curtailment).",
                                                    en: "2. The strategic role of storage in reducing curtailment losses.",
                                                    fr: "2. Le rôle stratégique du stockage dans la réduction des pertes par curtailment.",
                                                    it: "2. Il ruolo strategico dello stoccaggio nella riduzione delle perdite per curtailment."
                                                })}
                                                    
                                            </li>

                                            <li>
                                                
                                                
                                                {t({
                                                    es: "3. La necesidad de mantener un alto factor de capacidad del electrolizador para minimizar el coste nivelado del hidrógeno (LCOH).",
                                                    en: "3. The need to maintain a high capacity factor of the electrolyzer to minimize the levelized cost of hydrogen (LCOH).",
                                                    fr: "3. La nécessité de maintenir un facteur de capacité élevé de l'électrolyseur pour minimiser le coût nivelé de l'hydrogène (LCOH).",
                                                    it: "3. La necessità di mantenere un alto fattore di capacità dell'elettrolizzatore per minimizzare il costo livellato dell'idrogeno (LCOH)."
                                                })}
                                                    
                                            </li>

                                            <li>
                                                
                                                
                                                {t({
                                                    es: "convierte el agua en hidrógeno y oxígeno mediante corriente eléctrica. La eficiencia de este proceso depende de la estabilidad del suministro eléctrico y del factor de utilización.",
                                                    en: "Converts water into hydrogen and oxygen using electrical current. The efficiency of this process depends on the stability of the power supply and the utilization factor.",
                                                    fr: "Convertit l'eau en hydrogène et en oxygène à l'aide d'un courant électrique. L'efficacité de ce processus dépend de la stabilité de l'alimentation électrique et du facteur d'utilisation.",
                                                    it: "Converte l'acqua in idrogeno e ossigeno utilizzando corrente elettrica. L'efficienza di questo processo dipende dalla stabilità dell'alimentazione elettrica e dal fattore di utilizzo."
                                                })}
                                                    
                                            </li>
                                        </ul>

                                        <br />
                                        <h4 className="mt-4">{t({
                                            es: "Annitor: experiencia y capacidad integral en proyectos de hidrógeno verde", 
                                            en: "Annitor: comprehensive experience and capability in green hydrogen projects", 
                                            fr: "Annitor : expérience et capacité intégrées dans les projets d'hydrogène vert", 
                                            it: "Annitor: esperienza e capacità integrata nei progetti di idrogeno verde"})}</h4>
                                        <br />

                                        <p className="mt-3">
                                            {t({es: "En Annitor contamos con un equipo especializado en tecnologías de hidrógeno verde, capaz de cubrir todas las fases de un proyecto:", 
                                                en: "At Annitor, we have a team specialized in green hydrogen technologies, capable of covering all phases of a project:", 
                                                fr: "Chez Annitor, nous disposons d'une équipe spécialisée dans les technologies de l'hydrogène vert, capable de couvrir toutes les phases d'un projet :", 
                                                it: "In Annitor disponiamo di un team specializzato nelle tecnologie dell'idrogeno verde, in grado di coprire tutte le fasi di un progetto:"})}
                                        </p>
                                        <br />

                                        <ul className="list">
                                            <li>
                                                <strong>{t({
                                                    es: "Ingeniería y diseño de sistemas ", 
                                                    en: "Engineering and system design ", 
                                                    fr: "Ingénierie et conception de systèmes ", 
                                                    it: "Ingegneria e progettazione di sistemi "
                                                })}</strong>
                                                
                                                {t({
                                                    es: "que integran renovables, almacenamiento y electrólisis.",
                                                    en: "Integrating renewables, storage, and electrolysis.",
                                                    fr: "Intégrant des énergies renouvelables, du stockage et de l'électrolyse.",
                                                    it: "Integrando rinnovabili, stoccaggio ed elettrolisi."
                                                })}
                                                    
                                            </li>

                                            <li>
                                                <strong>{t({
                                                    es: "Gestión y tramitación ", 
                                                    en: "Management and processing ", 
                                                    fr: "Gestion et traitement ", 
                                                    it: "Gestione e lavorazione "
                                                })}</strong>
                                                
                                                {t({
                                                    es: "ante organismos y programas de apoyo público.",
                                                    en: "Before public support organizations and programs.",
                                                    fr: "Devant des organismes et des programmes de soutien publics.",
                                                    it: "Di fronte a organismi e programmi di sostegno pubblici."
                                                })}
                                                    
                                            </li>

                                            <li>
                                                <strong>{t({
                                                    es: "Construcción, puesta en marcha y operación ", 
                                                    en: "Construction, commissioning, and operation ", 
                                                    fr: "Construction, mise en service et exploitation ", 
                                                    it: "Costruzione, messa in servizio e operazione "
                                                })}</strong>
                                                
                                                {t({
                                                    es: "de plantas de hidrógeno adaptadas a cada necesidad.",
                                                    en: "For hydrogen plants adapted to each need.",
                                                    fr: "Pour des installations hydrogène adaptées à chaque besoin.",
                                                    it: "Per impianti a idrogeno adattati a ogni esigenza."
                                                })}
                                                    
                                            </li>
                                        </ul>
                                        <br />

                                        <p className="mt-3">
                                            <span dangerouslySetInnerHTML={{
                                                __html: t({
                                                    es: "Nuestra experiencia en energías renovables y almacenamiento nos permite ofrecer una visión completa y realista, asegurando que cada proyecto alcance los objetivos técnicos, económicos y medioambientales planteados.<br />El hidrógeno verde no es una promesa futura: es una realidad en la que Annitor ya está trabajando para impulsar la transición energética.",
                                                    en: "Our experience in renewable energy and storage allows us to offer a comprehensive and realistic vision, ensuring that each project meets the technical, economic, and environmental objectives set.<br />Green hydrogen is not a future promise: it is a reality that Annitor is already working on to drive the energy transition.",
                                                    fr: "Notre expérience dans les énergies renouvelables et le stockage nous permet d'offrir une vision complète et réaliste, garantissant que chaque projet atteint les objectifs techniques, économiques et environnementaux fixés.<br />L'hydrogène vert n'est pas une promesse future : c'est une réalité sur laquelle Annitor travaille déjà pour impulser la transition énergétique.",
                                                    it: "La nostra esperienza nelle energie rinnovabili e nello stoccaggio ci consente di offrire una visione completa e realistica, garantendo che ogni progetto raggiunga gli obiettivi tecnici, economici e ambientali prefissati.<br />L'idrogeno verde non è una promessa futura: è una realtà su cui Annitor sta già lavorando per guidare la transizione energetica."
                                                })
                                            }} />
                                        </p>
                                        <br />

                                        <h3>{t({es: "Preguntas Frecuentes", en: "Frequently Asked Questions", fr: "Questions Fréquemment Posées", it: "Domande Frequenti"})}</h3>
                                        <p className="mt-3">
                                            {t({es: "¿Quieres saber más sobre la energía de hidrógeno, sus usos o sus beneficios? Explora las respuestas a las preguntas comunes a continuación y descubre cómo el hidrógeno puede impulsar un mañana más limpio.", en: "Want to know more about hydrogen energy, its uses, or its benefits? Explore the answers to common questions below and discover how hydrogen can power a cleaner tomorrow.", fr: "Vous voulez en savoir plus sur l'énergie hydrogène, ses utilisations ou ses avantages ? Découvrez les réponses aux questions courantes ci-dessous et découvrez comment l'hydrogène peut alimenter un avenir plus propre.", it: "Vuoi saperne di più sull'energia da idrogeno, i suoi usi o i suoi benefici? Scopri le risposte alle domande comuni qui sotto e scopri come l'idrogeno può alimentare un domani più pulito."})}
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

export default ServiceDetailsHidrogen
