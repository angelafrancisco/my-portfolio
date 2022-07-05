import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            {/* <div className="contact-links-box footer">
                <a href="mailto:angelat.francisco@gmail.com?subject=Hello!" className="text-link footer">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-icon footer"></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/angela-francisco/" className="text-link footer">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-icon footer"></FontAwesomeIcon>
                </a>
                <a href="https://github.com/angelafrancisco" className="text-link footer">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon footer"></FontAwesomeIcon>
                </a>
            </div> */}
            <p className="footer-text">Designed & Coded by Angela Francisco &#169; 2022</p>
        </footer>
    )
}

export default Footer;