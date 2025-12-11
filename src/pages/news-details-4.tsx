import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"

const NewsDetails4 = () => {
    return (
        <>
            <PageTitle currentPage="Slaughterhouses in Romania" title="Slaughterhouses in Romania" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/news/post-44.jpg")' }} />
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
                                                    Agreements
                                                </li>
                                            </ul>
                                            <h3>Energy project for slaughterhouses in Romania</h3>
                                            <p className="mb-3">
                                                Annitor has initiated conversations with a Romanian company in the meat processing and slaughterhouse sector, with the aim of studying the implementation of a Battery Energy Storage System (BESS) at its production plants. This step marks a new stage in Annitor’s strategy to expand the application of advanced storage technologies across diverse industrial sectors and international markets.
                                            </p>
                                            <p className="mb-3">
                                                By opening this dialogue, Annitor reaffirms its commitment to supporting companies that seek greater efficiency, sustainability, and resilience in their operations. The potential integration of a BESS system in such an energy-intensive industry highlights the growing importance of renewable energy solutions and storage as key enablers for competitiveness and long-term stability.
                                            </p>
                                            <p className="mb-3">
                                                These conversations also reflect Annitor’s proactive approach to building international relationships and identifying opportunities that align with its vision of accelerating the transition towards cleaner and more efficient infrastructures. Establishing connections with companies outside the traditional energy sector underscores the versatility and relevance of storage technologies in today’s industrial landscape.
                                            </p>
                                            <p className="mb-3">
                                                While the discussions remain at an early stage, Annitor considers this initiative as an encouraging step forward, one that reinforces its role as a trusted partner in delivering innovative energy solutions and lays the foundation for potential future collaborations in Romania and beyond.
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

export default NewsDetails4
