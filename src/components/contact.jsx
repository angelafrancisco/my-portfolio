const Contact = () => {
    return (
        <section id="contact" className="content-container contact">
            <div className="section-content contact">
                <h1 className="section-title">Contact</h1>
                <div className="section-box contact">
                    <p className="section-text">
                        Let's connect! I'd love to grab a coffee and chat either in person or virtually!
                    </p>
                    <ul className="section-text">
                        <li>
                            <img src="#" alt="LinkedIn" />
                            <span> LinkedIn: </span>
                            <a href="https://www.linkedin.com/in/angela-francisco/" className="contact-link">@angela-francisco</a>
                        </li>
                        <li>
                            <img src="#" alt="Email" />
                            <span> Email: </span>
                            <a href="mailto:angelat.francisco@gmail.com?subject=Hello!" className="contact-link">angelat.francisco@gmail.com</a>
                        </li>
                        <li>
                            <img src="#" alt="GitHub" />
                            <span> GitHub: </span>
                            <a href="https://github.com/angelafrancisco" className="contact-link">@angelafrancisco</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact;