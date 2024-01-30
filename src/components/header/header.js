import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/logo.png";
import menu from "../../assets/logo/menu.png";
import menuClosed from "../../assets/logo/menu_close.png";
import "./header.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/modalStatus/modalStatus";


const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [openLinksMenu, setOpenLinksMenu] = useState(false);
  const menuRef = useRef();
  const dispatch = useDispatch();
  const links = [
    "/#about",
    "/#experience",
    "/#projects",
    "/#links",
    "/feedback",
  ];
  useOnClickOutside(menuRef, () => setOpenLinksMenu(false));

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
            <div className="header__nav__section__menu">
              <div className="header__nav__section__menu__img">
                <img
                  className={openLinksMenu ? 'hidden' : ''}
                  onClick={() => setOpenLinksMenu(!openLinksMenu)}
                  src={menu}
                  alt="menu" />
                <img
                  className={!openLinksMenu ? 'hidden' : ''}
                  onClick={() => setOpenLinksMenu(!openLinksMenu)}
                  src={menuClosed}
                  alt="menu" />
              </div>
              {/* {openLinksMenu && */}
              <div ref={menuRef}
                className={`header__nav__section__menu__mobileLinks 
              ${openLinksMenu ? 'appear' : 'disappear'} ${!menuRef.current ? 'hiddenMenu' : ''}`}>
                {links.map((link) => {
                  return (
                    <a
                      key={link}
                      href={link}
                    >
                      {link.replace(/\W/g, "")}
                    </a>
                  );
                })}
                <a
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(showModal(true));
                  }}
                >
                  Contact
                </a>
              </div>
              {/* } */}
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
