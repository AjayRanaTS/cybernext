import { Link } from "react-router-dom";
import logo from '../../src/assets/logo-cyber.png'

const Header = () => {
    return (
        <>
            <header className="site-header" id="site-header" role="header">
                <div className="container">
                    <div className="header-wrap">
                        <div className="header-logo">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <nav className="header-nav">
                            <ul>
                                <li>
                                    <Link to="/" className="font-source text-[16px]">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About us</Link>
                                </li>
                                <li>
                                    <Link to="/">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-cta">
                            <Link className="primary-button cta-btn" to="/contact">Get In Touch</Link>
                        </div>
                    </div>

                </div>
            </header>

        </>
    )
}

export default Header
