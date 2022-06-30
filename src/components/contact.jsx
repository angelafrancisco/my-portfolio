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
                    <div className="contact-links">
                        <div className="contact-links-box">
                            <a href="https://www.linkedin.com/in/angela-francisco/" className="contact-link">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <p>LinkedIn</p>
                        </div>
                        <div className="contact-links-box">
                            <a href="mailto:angelat.francisco@gmail.com?subject=Hello!" className="contact-link">
                                <i className="fa-regular fa-envelope"></i>
                            </a>
                            <p>Email</p>
                        </div>
                        <div className="contact-links-box">
                            <a href="https://github.com/angelafrancisco" className="contact-link">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;