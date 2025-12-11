import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"

const NewsDetails6 = () => {
    return (
        <>
            <PageTitle currentPage="Moroccan battery plant for BESS" title="Moroccan battery plant for BESS" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/news/post-66.jpg")' }} />
                                        <div className="post-content">
                                            <ul className="post-list d-flex align-items-center">
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Annitor Africa
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days" />
                                                    July, 2025
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    Agreements
                                                </li>
                                            </ul>
                                            <h3>Annitor is negotiating with the Moroccan government regarding a potential battery plant for BESS</h3>
                                            <p className="mb-3">
                                                Annitor has entered into negotiations with the Moroccan administration regarding the potential development of a dedicated battery plant for Battery Energy Storage Systems (BESS). This step represents a significant milestone in the company’s international expansion strategy and demonstrates its commitment to exploring large-scale opportunities that can contribute to the global energy transition.
                                            </p>
                                            <p className="mb-3">
                                                The discussions reflect Morocco’s increasing interest in strengthening its renewable energy ecosystem and enhancing its capacity to integrate advanced storage solutions. For Annitor, engaging in dialogue with institutional stakeholders is a strategic move that reinforces its positioning as a trusted partner in the development of innovative energy infrastructures.
                                            </p>
                                            <p className="mb-3">
                                                A potential project of this nature would mark an important step forward for both the company and the region, highlighting the role of BESS as a cornerstone for achieving stability, efficiency, and sustainability in modern energy systems. It also underlines Annitor’s proactive approach in seeking collaborations that align with long-term goals of resilience and decarbonization.
                                            </p>
                                            <p className="mb-3">
                                                Although negotiations are still at an early stage, Annitor views this initiative as an encouraging opportunity to consolidate its presence in North Africa and to strengthen ties with a country that has become a reference in renewable energy development. The company remains committed to advancing conversations that can pave the way for impactful projects with regional and global significance.
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

export default NewsDetails6
