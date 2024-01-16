import React from "react";
import Button from "../button/button";
import "./links.scss";

const Links = () => {
  const links = ["Github", "Telegram", "Linkedin", "Instagram", "Source"];
  return (
    <section id="links" className="links">
      <div className="links__container">
        <div className="links__container__left">
          <h4>NEED A CREATIVE WEB DEVELOPER? LET'S BUILD SOMETHING.</h4>
          <Button text="Say hi" />
        </div>
        <div className="links__container__right">
          <ul>
            {links.map((el) => {
              return (
                <li>
                  <a>{el}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Links;
