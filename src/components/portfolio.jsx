const Portfolio = () => {
    return (
        <div id="portfolio" className="content-container portfolio">
            <div className="section-content portfolio">
                <h1 className="section-title">Portfolio</h1>
                <div className="grid-container">
                    <div className="grid-box">
                        <img className="grid-img" src="/img/portfolio-books-300.jpg" alt="Books on bookshelves" />
                        <div className="grid-modal">
                            <h3>.readME</h3>
                            <p>A MERN-stack web app for book enthusiasts! (no login needed)</p>
                            <div className="buttons-container">
                                <a className="button-link" href="https://github.com/angelafrancisco/bookapp-fe" target="__blank"
                                    rel="noreferrer noopener">GitHub</a>
                                <a className="button-link" href="https://readme-bookapp.herokuapp.com/" target="__blank"
                                    rel="noreferrer noopener">Web App</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/portfolio-plants-300.jpg" alt="Succulents and cacti" />
                            <div className="grid-modal">
                                <h3>PlantPet</h3>
                                <p>A full-stack web app for tracking plant care and more! (no login needed)</p>
                                <div className="buttons-container">
                                    <a className="button-link" href="https://github.com/angelafrancisco/plantpet-react-fe" target="__blank"
                                        rel="noreferrer noopener">GitHub</a>
                                    <a className="button-link" href="https://plantpet.herokuapp.com/" target="__blank"
                                        rel="noreferrer noopener">Web App</a>
                                </div>
                            </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/portfolio-events-300.png" alt="Screenshot of event finder app" />
                            <div className="grid-modal">
                                <h3>Eventpalooza</h3>
                                <p>A full-stack web app for finding and saving local events.</p>
                                <div className="buttons-container">
                                    <a className="button-link" href="https://github.com/ercheung3/event-finder" target="__blank"
                                        rel="noreferrer noopener">GitHub</a>
                                    <a className="button-link" href="https://eventpalooza.herokuapp.com/events" target="__blank"
                                        rel="noreferrer noopener">Web App</a>
                                </div>
                            </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/portfolio-airbnb-300.png" alt="Screenshot of Airbnb mockup" />
                            <div className="grid-modal">
                                <h3>AirBnB Website Mockup</h3>
                                <p>Portland specific AirBnB experience page mockup for pet-friendly destinations.</p>
                                <div className="buttons-container">
                                    <a className="button-link" href="https://github.com/angelafrancisco/airbnb-mockup" target="__blank"
                                        rel="noreferrer noopener">GitHub</a>
                                    <a className="button-link" href="https://angelafrancisco.github.io/airbnb-mockup/" target="__blank"
                                        rel="noreferrer noopener">Mockup</a>
                                </div>
                            </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/portfolio-lawn-300.jpg" alt="Lawnmower over grass" />
                            <div className="grid-modal">
                                <h3>Landscaper Game</h3>
                                <p>Mini web browser game to build your landscaping dream empire.</p>
                                <div className="buttons-container">
                                    <a className="button-link" href="https://github.com/angelafrancisco/landscaper-game"
                                        target="__blank" rel="noreferrer noopener">GitHub</a>
                                    <a className="button-link" href="https://angelafrancisco.github.io/landscaper-game/"
                                        target="__blank" rel="noreferrer noopener">Web Game</a>
                                </div>
                            </div>
                    </div>
                    <div className="grid-box">
                        <img className="grid-img" src="/img/portfolio-pokemon-300.jpeg" alt="Two Pokeballs on grass" />
                            <div className="grid-modal">
                                <h3>Poke&#769;mon Trainer</h3>
                                <p>Choose your own adventure themed game as a Poke&#769;mon trainer. Choose, train, and gain
                                    health/friendship.</p>
                                <div className="buttons-container">
                                    <a className="button-link" href="https://github.com/angelafrancisco/pokemon-trainer-game"
                                        target="__blank" rel="noreferrer noopener">GitHub</a>
                                    <a className="button-link" href="https://angelafrancisco.github.io/pokemon-trainer-game/"
                                        target="__blank" rel="noreferrer noopener">Web Game</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;