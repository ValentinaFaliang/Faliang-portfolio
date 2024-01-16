import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/modalStatus/modalStatus";

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const dispatch = useDispatch();
  const links = [
    "/#about",
    "/#experience",
    "/#projects",
    "/#links",
    "/feedback",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <>
      <header className="header">
        <div className={scrollTop > 30 ? "headerScrollMask" : "headerMask"} />
        <nav className="header__nav">
          <section className="header__nav__section">
            <div className="header__nav__section__logo">
              <Link to="/">
                <img
                  onClick={() => window.scrollTo(0, 0)}
                  src={logo}
                  alt="logo_法liang"
                />
              </Link>
            </div>
            <div className="header__nav__section__links">
              {links.map((link) => {
                return (
                  <a
                    key={link}
                    className={
                      scrollTop > 30
                        ? "header__nav__section__links__link2"
                        : "header__nav__section__links__link"
                    }
                    href={link}
                  >
                    {link.replace(/\W/g, "")}
                  </a>
                );
              })}
              <span className="divider"></span>
              <a
                className={
                  scrollTop > 30
                    ? "header__nav__section__links__link2"
                    : "header__nav__section__links__link"
                }
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(showModal(true));
                }}
              >
                Contact
              </a>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
