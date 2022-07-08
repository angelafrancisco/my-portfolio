const About = () => {
    return (
        <section id="about" className="content-container about">
            <h1 className="section-title">ABOUT</h1>
            <div className="section-content about">
                <div className="section-flexbox">
                    <div className="section-box about">
                        <p className="section-text">
                            I'm a software engineer based in Portland, OR.
                            <br />
                            I love coffee and exploring the Northwest by biking, hiking and camping.
                            <br />
                            I'm passionate about the details, and building scalable, responsive, and accessible applications. 
                            After pivoting from ten years in the nonprofit sector focused in relational database administration, 
                            I have a strong foundation in analyzing problems, maintaining complex systems and facilitating cross-team collaboration.
                            <br />
                            Some of my favorite technologies to work with recently are React.js, Node.js and SCSS.
                        </p>
                        <a href="#" className="button-link">Download Resume</a>
                    </div>
                    <div className="section-box about">
                        <img className="about-img" src="/img/avatar-biking.png" alt="woman on bike" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;