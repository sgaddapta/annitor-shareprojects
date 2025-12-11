import SectionTitle from "@/components/ui/sectionTitle"

const AboutTwo = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-2.jpg")' }}>
            <div className="container">
                <div className="about-wrapper style-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="circle-shape">
                                    <img src="/img/about/circle.png" alt="shape-img" />
                                </div>
                                <div className="counter-shape float-bob-y">
                                    <div className="icon">
                                        <img src="/img/about/icon-1.svg" alt="icon-img" />
                                    </div>
                                    <div className="content">
                                        <h3><span className="count">25</span>Years</h3>
                                        <p>Of Experience</p>
                                    </div>
                                </div>
                                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img/about/03.png")' }}>
                                    <div className="about-image-2 wow slideUp" data-delay=".5">
                                        <img src="/img/about/04.jpg" alt="about-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                                    <SectionTitle.Title>The Future of Renewables is <span>Energy Storage</span></SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Battery Energy Storage Systems (BESS) are the missing link for renewables making clean energy reliable, scalable, and available anytime. They transform intermittent power into a true 24/7 solution.
                                </p>
                                <div className="about-icon-items">
                                    <div className="icon-items wow slideUp" data-delay=".7">
                                        <div className="icon">
                                            <img src="/img/about/icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>Efficiency</h4>
                                            <p>
                                                Energy efficiency is key to sustainability.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="icon-items wow slideUp" data-delay=".9">
                                        <div className="icon">
                                            <img src="/img/about/icon-5.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>Stability</h4>
                                            <p>
                                                BESS ensures grid stability for renewable energy integration.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutTwo