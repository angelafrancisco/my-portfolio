import { useState } from 'react';

const Header = () => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }

    return (
        <nav className={showing ? "open" : ""}>
            <a className="logo" href="#home">
                <img className="logo" src="/logo.png" alt="logo" />
            </a>
            <div onClick={toggleShowing} className={`nav-mobile-container ${showing ? "move" : ""}`}>
                <div className="nav-hamburger bar1"></div>
                <div className="nav-hamburger bar2"></div>
                <div className="nav-hamburger bar3"></div>
            </div>
            <div className="nav-container">
                <ul className={`nav-link-list ${showing ? "open-mobile" : ""}`}>
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