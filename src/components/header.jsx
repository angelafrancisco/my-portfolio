const Header = () => {
    return (
        <nav className="navbar" id="home">
            <div className="navbar-container">
                <a href="#home" className="af-logo">AF</a>
            </div>
            <div className="navbar-container">
                {/* <div className="navbar-mobile-container">
                    <div className="nav-hamburger bar1"></div>
                    <div className="nav-hamburger bar2"></div>
                    <div className="nav-hamburger bar3"></div>
                </div> */}
                <ul className="navbar-link-list">
                    <li className="nav-link">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav-link">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-link">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-link">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;