import LanguageSelectorSimple from "../ui/languageSelectorSimple";
import { Link } from "react-router-dom";

const TopHeaderTwo = () => {

    return (
        <div className="header-top-section top-style-3">
            <div className="container">
                <div className="header-top-wrapper">
                    <ul className="contact-list">
                        <li>
                            <i className="far fa-envelope" />
                            <Link to="mailto:info@annitor-gr.com" className="link">info@annitor-gr.com</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone-volume" />
                            <Link to="tel:34606690792">+34 606 690792</Link>
                        </li>
                    </ul>
                    <div className="top-right">
                        <div className="flag-wrap d-flex justify-content-end">
                            <LanguageSelectorSimple />
                        </div>
                        <div className="social-icon d-flex align-items-center">
                            <span>Follow Us:</span>
                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                            <Link to="#"><i className="fa-brands fa-x-twitter" /></Link>
                            <Link to="#"><i className="fa-brands fa-linkedin-in" /></Link>
                            <Link to="#"><i className="fa-brands fa-youtube" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeaderTwo