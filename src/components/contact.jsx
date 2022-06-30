import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <section id="contact" className="content-container contact">
            <div className="section-content contact">
                <h1 className="section-title">Contact</h1>
                <div className="section-box contact">
                    <p className="section-text">
                        Let's connect!
                        I love learning about individual experiences within tech! 
                        And a bonus, if you're in the Portland area, I'd love to grab coffee too!
                    </p>
                    <div className="contact-links-box">
                        <a href="mailto:angelat.francisco@gmail.com?subject=Hello!" className="contact-link">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-icon"></FontAwesomeIcon>
                            Email
                        </a>
                        <a href="https://www.linkedin.com/in/angela-francisco/" className="contact-link">
                            <FontAwesomeIcon icon={faLinkedin} className="fa-icon"></FontAwesomeIcon>
                            LinkedIn
                        </a>
                        <a href="https://github.com/angelafrancisco" className="contact-link">
                            <FontAwesomeIcon icon={faGithub} className="fa-icon"></FontAwesomeIcon>
                            GitHub
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;