const Header = () => {
    return (
        <nav id="home" className="navbar">
            <div className="navbar-container">
                <a className="logo" href="#home">
                    <img className="logo" src="/logo.png" alt="logo" />
                </a>
            </div>
            <div className="navbar-container">
                {/* <div className="navbar-mobile-container">
                    <div className="nav-hamburger bar1"></div>
                    <div className="nav-hamburger bar2"></div>
                    <div className="nav-hamburger bar3"></div>
                </div> */}
                <ul className="navbar-link-list">
                    <li className="nav-link">
                        <a className="text-link" href="#home">Home</a>
                    </li>
                    <li className="nav-link">
                        <a className="text-link" href="#about">About</a>
                    </li>
                    <li className="nav-link">
                        <a className="text-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-link">
                        <a className="text-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;