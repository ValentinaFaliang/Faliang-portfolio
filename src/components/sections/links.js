import React from "react";
import Button from "../button/button";
import "./links.scss";

const Links = () => {
  const links = 
  [{name: "Github", link: 'https://github.com/ValentinaFaliang'
}, {name:"Telegram", link:'https://t.me/faliang'}, 
{name:"Linkedin", link: 'https://linkedin.com/in/valentina-vlasenko-60b010230'}, 
{name:"Instagram", link: 'https://www.instagram.com/yaznayuvchemsut'}, 
{name: "Source", link: 'https://github.com/ValentinaFaliang?tab=repositories'}];
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
                  <a href={el.link}>{el.name}</a>
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
