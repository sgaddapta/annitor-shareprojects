import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"

const NewsDetails3 = () => {
    return (
        <>
            <PageTitle currentPage="SLRack Agreement" title="SLRack Agreement" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/news/post-33.jpg")' }} />
                                        <div className="post-content">
                                            <ul className="post-list d-flex align-items-center">
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Annitor Spain
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days" />
                                                    10 May, 2025
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    Agreements
                                                </li>
                                            </ul>
                                            <h3>Annitor reaches a collaboration agreement with German support and structure manufacturer SLRack</h3>
                                            <p className="mb-3">
                                                Annitor has reached a collaboration agreement with the German manufacturer SL Rack, a leading company in the design and construction of mounting systems and structures for photovoltaic installations. This new step represents an important milestone for Annitor, as it strengthens its ability to deliver high-quality solutions while positioning the company with a clear advantage in a highly competitive market.
                                            </p>
                                            <p className="mb-3">
                                                The agreement establishes a strong foundation for long-term cooperation with one of the most recognized names in the sector. SL Rack is widely regarded as a reference in the development of durable and innovative structural solutions that ensure the optimal performance and reliability of solar energy projects. By joining forces with such a reputable partner, Annitor reinforces its commitment to combining cutting-edge technology with trusted engineering expertise.
                                            </p>
                                            <p className="mb-3">
                                                Beyond the immediate benefits, this collaboration reflects Annitor’s strategic approach to building alliances that add value to its clients and contribute to the growth of sustainable energy worldwide. The favorable conditions achieved within this agreement create opportunities to expand the company’s reach, improve competitiveness, and further enhance the efficiency of the projects it develops.
                                            </p>
                                            <p className="mb-3">
                                                For Annitor, this milestone is another step forward in consolidating its role as a reliable partner for renewable energy initiatives and in supporting the broader transition towards cleaner, more resilient, and sustainable infrastructures.
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

export default NewsDetails3
