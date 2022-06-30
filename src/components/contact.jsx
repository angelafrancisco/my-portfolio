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
                            <img src="#" alt="LinkedIn" />
                            <span> LinkedIn: </span>
                            <a href="https://www.linkedin.com/in/angela-francisco/" className="contact-link">@angela-francisco</a>
                        </div>
                        <div className="contact-links-box">
                            <img src="#" alt="Email" />
                            <span> Email: </span>
                            <a href="mailto:angelat.francisco@gmail.com?subject=Hello!" className="contact-link">angelat.francisco@gmail.com</a>
                        </div>
                        <div className="contact-links-box">
                            <img src="#" alt="GitHub" />
                            <span> GitHub: </span>
                            <a href="https://github.com/angelafrancisco" className="contact-link">@angelafrancisco</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;