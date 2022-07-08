const Portfolio = () => {
    return (
        <section id="portfolio" className="content-container portfolio">
            <h1 className="section-title">PORTFOLIO</h1>
            <div className="section-content portfolio">
                <div className="grid-container">
                    <div className="grid-box">
                        <img className="grid-img" src="/img/mockup-bookapp.png" alt="Device preview of website"/>
                        <div className="grid-textbox">
                            <h3 className="project-title">
                                .README - WEB APP
                            </h3>
                            <p className="project-text">
                                A full-stack web application, .readME is for book enthusiasts! Search and save books,
                                add custom book lists, and more!
                                <span className="italic-text"> (No login needed)</span>
                            </p>
                            <p className="project-techstack bold-text">
                                React - Node - Express - MongoDB
                            </p>
                            <div className="buttons-container">
                                <a className="button-link" href="https://readme-bookapp.herokuapp.com/" target="__blank"
                                    rel="noreferrer noopener">Web App</a>
                                <a className="button-link" href="https://github.com/angelafrancisco/bookapp-fe" target="__blank"
                                    rel="noreferrer noopener">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/mockup-plantpet.png" alt="Device preview of website"/>
                        <div className="grid-textbox">
                            <h3 className="project-title">
                                PLANTPET - WEB APP
                            </h3>
                            <p className="project-text">
                                A full-stack web application, PlantPet is for the plant obsessed, plant newbies, and aspiring plant parents.
                                Track individual plant watering, add photos, and personalized plant care!
                                <span className="italic-text"> (No login needed)</span>
                            </p>
                            <p className="project-techstack bold-text">
                                React - Python - Django - PostgreSQL
                            </p>
                            <p className="project-text">
                                <span className="italic-text">*Version 2.0 of a previous MERN stack web app.</span>
                            </p>
                            <div className="buttons-container">
                                <a className="button-link" href="https://plantpet.herokuapp.com/" target="__blank"
                                    rel="noreferrer noopener">Web App</a>
                                <a className="button-link" href="https://github.com/angelafrancisco/plantpet-react-fe" target="__blank"
                                    rel="noreferrer noopener">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/mockup-events.png" alt="Device preview of website" />
                        <div className="grid-textbox">
                            <h3 className="project-title">
                                EVENT FINDER - WEB APP
                            </h3>
                            <p className="project-text">
                                A full-stack web application, find upcoming events (music, sports, community, etc.) near you with Eventpalooza.
                                Utilizing the Ticketmaster API for Portland, OR.
                            </p>
                            <p className="project-techstack bold-text">
                                HTML/CSS - JavaScript - EJS - Node - Express - MongoDB - Axios API
                            </p>
                            <div className="buttons-container">
                                <a className="button-link" href="https://eventpalooza.herokuapp.com/events" target="__blank"
                                    rel="noreferrer noopener">Web App</a>
                                <a className="button-link" href="https://github.com/ercheung3/event-finder" target="__blank"
                                    rel="noreferrer noopener">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/mockup-airbnb.png" alt="Device preview of website" />
                        <div className="grid-textbox">
                            <h3 className="project-title">
                                AIRBNB MOCKUP
                            </h3>
                            <p className="project-text">
                                Front-end design mockup of a fictional Portland specific AirBnB experience page for pet-friendly destinations.
                            </p>
                            <p className="project-techstack bold-text">
                                HTML - CSS - JavaScript
                            </p>
                            <div className="buttons-container">
                                <a className="button-link" href="https://angelafrancisco.github.io/airbnb-mockup/" target="__blank"
                                    rel="noreferrer noopener">Mockup</a>
                                <a className="button-link" href="https://github.com/angelafrancisco/airbnb-mockup" target="__blank"
                                    rel="noreferrer noopener">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/mockup-landscaper.png" alt="Device preview of website" />
                        <div className="grid-textbox">
                            <h3 className="project-title">
                                LANDSCAPER
                            </h3>
                            <p className="project-text">
                                A web browser game to build your landscaping dream empire by leveling up your grass-cutting tools. 
                                Utlizing browser alerts and prompts to send messages and receive input from user.
                            </p>
                            <p className="project-techstack bold-text">
                                HTML - CSS - JavaScript - jQuery
                            </p>
                            <div className="buttons-container">
                                <a className="button-link" href="https://angelafrancisco.github.io/landscaper-game/"
                                    target="__blank" rel="noreferrer noopener">Web Game</a>
                                <a className="button-link" href="https://github.com/angelafrancisco/landscaper-game"
                                    target="__blank" rel="noreferrer noopener">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/mockup-pokemon.png" alt="Device preview of website" />
                        <div className="grid-textbox">
                            <h3 className="project-title">
                                POKEMON TRAINER
                            </h3>
                            <p className="project-text">
                                A choose your own adventure web browser game, as a Poke&#769;mon trainer. 
                                Choose a starter Poke&#769;mon, train them, and gain health/friendship points.
                            </p>
                            <p className="project-techstack bold-text">
                                HTML - CSS - JavaScript - jQuery
                            </p>
                            <div className="buttons-container">
                                <a className="button-link" href="https://angelafrancisco.github.io/pokemon-trainer-game/"
                                    target="__blank" rel="noreferrer noopener">Web Game</a>
                                <a className="button-link" href="https://github.com/angelafrancisco/pokemon-trainer-game"
                                    target="__blank" rel="noreferrer noopener">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;