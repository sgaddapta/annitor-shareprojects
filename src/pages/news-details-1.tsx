import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"

const NewsDetails1 = () => {
    return (
        <>
            <PageTitle currentPage="Peru Agreement" title="Peru Agreement" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/news/post-11.jpg")' }} />
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
                                            <h3>Peru Agreement</h3>
                                            <p className="mb-3">
                                                Annitor is negotiating important agreements with a Peruvian business group from the AIE (Economic Interest Grouping) in the agricultural & hotel sector. This milestone represents a significant step forward in the company’s international expansion strategy and reinforces its commitment to driving sustainable solutions in key Latin American markets.
                                            </p>
                                            <p className="mb-3">
                                                Through this alliance, Annitor strengthens its position as a trusted technology partner, bringing its expertise in the development of renewable energy projects and state-of-the-art energy storage solutions. The agreement opens the door to new opportunities for collaboration in a sector that is undergoing a major transformation towards efficiency and sustainability.
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

export default NewsDetails1
