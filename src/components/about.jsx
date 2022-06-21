const About = () => {
    return (
        <div id="about" className="content-container about">
            <div className="section-content about">
                <div className="section-box about">
                    <h1 className="section-title">About</h1>
                    <p className="section-text">
                        I'm a software engineer based in Portland, OR.
                        <br />
                        I'm passionate about the details, and building scalable, responsive, and accessible applications. 
                        After pivoting from ten years in the nonprofit sector focused in relational database administration, 
                        I have a strong foundation in analyzing problems, maintaining complex systems and facilitating cross-team collaboration.
                        <br />
                        Some of my favorite technologies to work with recently are React.js, Node.js and SCSS.
                    </p>
                </div>
                <div className="section-box about">
                    <img className="about-img" src="/img/avatar-biking.png" alt="woman on bike" />
                    <a href="#" className="button-link">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About;