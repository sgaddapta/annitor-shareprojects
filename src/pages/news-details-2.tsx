import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"

const NewsDetails2 = () => {
    return (
        <>
            <PageTitle currentPage="BESS Agreement" title="BESS Agreement" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/news/post-22.jpg")' }} />
                                        <div className="post-content">
                                            <ul className="post-list d-flex align-items-center">
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Annitor Spain
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days" />
                                                    17 April, 2025
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    Agreements
                                                </li>
                                            </ul>
                                            <h3>BESS Agreement</h3>
                                            <p className="mb-3">
                                                Annitor is pleased to announce the signing of a preliminary agreement with a Spanish manufacturer specialized in coupling and synchronization systems for Battery Energy Storage Solutions (BESS). This step marks an important moment in the company’s roadmap and highlights its determination to keep building strong alliances with key players in the energy sector.
                                            </p>
                                            <p className="mb-3">
                                                The agreement reflects Annitor’s continuous effort to explore innovative partnerships that contribute to the development of advanced technologies and reinforce its capacity to respond to the growing demand for reliable and sustainable energy solutions. By working alongside experienced industry partners, Annitor aims to consolidate its position as a trusted reference in the field of renewable energy integration and storage.
                                            </p>
                                            <p className="mb-3">
                                                This milestone not only broadens Annitor’s network of collaborations but also supports its vision of accelerating the global transition towards cleaner and more efficient infrastructures. It underscores the company’s long-term commitment to innovation, sustainability, and the creation of added value for both clients and society.
                                            </p>
                                            <p className="mb-3">
                                                While the details of the agreement remain confidential, this preliminary step opens the way for new opportunities, strategic synergies, and the strengthening of Annitor’s international presence. The company views this development as a foundation for future projects that will continue to drive technological progress and support the energy transformation on a global scale.
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

export default NewsDetails2
