const Home = () => {
    return (
        <div className="content-container home">
            <div className="hero-wrapper home">
                <div className="hero-box">
                    <img className="avatar" src="/avatar.png" alt="avatar" />
                </div>
                <div className="hero-box">
                    <p className="hero-text small">&#128075;&#127997; Hi there, I'm</p>
                    <h1 className="hero-text name">Angela<br/>Francisco</h1>
                    <h3 className="hero-text title">Software Engineer</h3>
                    <p className="hero-text small">&#128205; <span className="text-location">Portland, OR</span></p>
                    <div className="hero-box-contact">
                        <a href="#connect" className="hero-link">Let's connect!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;