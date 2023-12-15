import React from "react";
import "./links.scss";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/modalStatus/modalStatus";

const Links = () => {
  const dispatch = useDispatch();

  return (
    <section id="links" className="links">
      <div className="links__container">
        <div className="links__container__left">
          <h4>NEED A CREATIVE WEB DEVELOPER? LET'S BUILD SOMETHING.</h4>
          <button onClick={(event) => {
                  event.preventDefault();
                  dispatch(showModal(true));
                }}>
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
