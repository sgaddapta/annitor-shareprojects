import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"

const NewsDetails5 = () => {
    return (
        <>
            <PageTitle currentPage="Photovoltaic installation and BESS" title="Photovoltaic installation and BESS" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/news/post-55.jpg")' }} />
                                        <div className="post-content">
                                            <ul className="post-list d-flex align-items-center">
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Annitor Spain
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days" />
                                                    Jun, 2025
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    Project
                                                </li>
                                            </ul>
                                            <h3>Annitor Group Africa Ltd., based in Lagos, Nigeria, receives a firm order for a photovoltaic installation and BESS covering the 20,000 m² roof of its warehouses.</h3>
                                            <p className="mb-3">
                                                Annitor Group Africa Ltd., based in Lagos (Nigeria), has received a confirmed order for the installation of a photovoltaic system combined with a Battery Energy Storage System (BESS), to be deployed across approximately 20,000 square meters of rooftop space on its facilities. This project represents a major milestone for the company in one of the most dynamic and promising markets for renewable energy on the African continent.
                                            </p>
                                            <p className="mb-3">
                                                The confirmed order highlights both the confidence placed in Annitor Group Africa Ltd. and the growing demand for reliable, sustainable, and large-scale energy solutions in Nigeria. By combining solar generation with advanced storage technologies, the project is designed to optimize the use of available infrastructure, improve energy efficiency, and ensure long-term stability of supply.
                                            </p>
                                            <p className="mb-3">
                                                This development also reinforces Annitor’s strategic vision of expanding its presence in Africa and becoming a trusted partner for organizations that are seeking to transition towards cleaner and more resilient energy systems. The scale of the project demonstrates the company’s ability to deliver comprehensive, high-impact solutions that respond to the needs of industries operating in demanding and rapidly evolving environments.
                                            </p>
                                            <p className="mb-3">
                                                For Annitor, this achievement goes beyond a single project: it underlines the company’s long-term commitment to innovation, sustainability, and collaboration in international markets. It stands as a clear example of how Annitor is driving forward the adoption of renewable energy and storage solutions that create value not only for clients, but also for society as a whole.
                                            </p>        
                                        </div>
                                    </div>
                                    <BlogComments />
                                    <BlogCommentFrom />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsDetails5
