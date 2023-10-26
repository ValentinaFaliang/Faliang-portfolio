import React from "react";
import logo from "../../assets/logo/logo.png"
import "./header.scss";

const Header = () => {
    return(
        <header className="header">
            <nav className="header__nav">
                <section className="header__nav__section">
                    <div className="header__nav__section__logo">
                        <img src={logo} alt="logo_法liang"/>
                    </div>
                    <div className="header__nav__section__links">
                        <a  href="#/about">About</a>
                        <a  href="#/experience">Experience</a>
                        <a  href="#/projects">Projects</a>
                        <a  href="#/links">Links</a>
                        <a  href="#/contact">Contact</a>
                        <span className="divider"></span>
                        <a  href="#/projects">Blog</a>
                    </div>
                </section>
            </nav>
        </header>
    )
};

export default Header;