import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
      <div className={scrollTop > 30 ? "headerScrollMask" : "headerMask"} />
        <nav className="header__nav">
          <section className="header__nav__section">
            <div className="header__nav__section__logo">
              <Link to="/">
                <img
                  onClick={() =>  window.scrollTo(0, 0)}
                  src={logo}
                  alt="logo_法liang"
                />
              </Link>
            </div>
            <div className="header__nav__section__links">
              <a
                className={
                  scrollTop > 30
                    ? "header__nav__section__links__link2"
                    : "header__nav__section__links__link"
                }
                href="/#about"
              >
                About
              </a>
              <a
                className={
                  scrollTop > 30
                    ? "header__nav__section__links__link2"
                    : "header__nav__section__links__link"
                }
                href="/#experience"
              >
                Experience
              </a>
              <a
                className={
                  scrollTop > 30
                    ? "header__nav__section__links__link2"
                    : "header__nav__section__links__link"
                }
                href="/#projects"
              >
                Projects
              </a>
              <a
                className={
                  scrollTop > 30
                    ? "header__nav__section__links__link2"
                    : "header__nav__section__links__link"
                }
                href="/#links"
              >
                Links
              </a>
              <Link
                className={
                  scrollTop > 30
                    ? "header__nav__section__links__link2"
                    : "header__nav__section__links__link"
                }
                to="/contact"
              >
                Contact
              </Link>
              <span className="divider"></span>
              <Link
                className={
                  scrollTop > 30
                    ? "header__nav__section__links__link2"
                    : "header__nav__section__links__link"
                }
                to="/blog"
              >
                Feedback
              </Link>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
