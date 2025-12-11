import { BlogPostDataType } from "@/db/blogPostsThreeData"
import { Link } from "react-router-dom"
import { useLanguage } from "@/hooks/useLanguage"
import { blogI18nData } from "@/db/i18n/blogData"

const BlogCard = ({ news, className }: { news: BlogPostDataType, className?: string }) => {
    const { t } = useLanguage();
    
    // Find the corresponding i18n data
    const blogI18n = blogI18nData.find(b => b.id === news.id);
    
    return (
        <div className={`news-card-items ${className}`}>
            <div className="news-image">
                <img src={news.image} alt="news-img" />
                <div className="post-date">
                    <h3>
                        {news.date.day} <br />
                        <span>{news.date.month}</span>
                    </h3>
                </div>
            </div>
            <div className="news-content">
                <ul>
                    <li>
                        <i className="fa-regular fa-user" />
                        By {blogI18n ? t(blogI18n.author) : news.author}
                    </li>
                    <li>
                        <i className="fa-solid fa-tag" />
                        {blogI18n ? t(blogI18n.category) : news.category}
                    </li>
                </ul>
                <h3>
                    <Link to={news.link}>
                        {blogI18n ? t(blogI18n.title) : news.title}
                    </Link>
                </h3>
                <Link to={news.link} className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard