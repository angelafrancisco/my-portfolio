const About = () => {
    return (
        <div id="about" className="content-container about">
            <div className="section-box about">
                <h1 className="section-title">About</h1>
                <p className="section-text">
                    I'm a software engineer based in Portland, OR.
                </p>
                <p className="section-text">
                    I'm passionate about the details, and building scalable, responsive, and accessible applications. 
                    After pivoting from ten years in the nonprofit sector focused in relational database administration, 
                    I have a strong foundation in analyzing problems, maintaining complex systems and facilitating cross-team collaboration.
                </p>
                <p className="section-text">
                    Some of my favorite technologies to work with recently are React.js, Node.js and SCSS.
                </p>
            </div>
            <div className="section-box about">
                <img className="headshot-img" src="#" alt="Headshot Photo" />
                <a href="#">My Resume</a>
            </div>
        </div>
    )
}

export default About;