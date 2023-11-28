import React from "react";
import "./links.scss";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const navigate = useNavigate();
  const showModal = () => {
    navigate("contact");
  };
  return (
    <section id="links" className="links">
      <div className="links__container">
        <div className="links__container__left">
          <h4>NEED A CREATIVE WEB DEVELOPER? LET'S BUILD SOMETHING.</h4>
          <button onClick={showModal}>
            <span>Get in touch</span>
          </button>
        </div>
        <div className="links__container__right">
            <ul>
                <li><a>Github</a></li>
                <li><a>Telegram</a></li>
                <li><a>Linkedin</a></li>
                <li><a>Instagram</a></li>
                <li><a>Source</a></li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Links;
