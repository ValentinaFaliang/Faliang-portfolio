import React from "react";
import faliang from "../../assets/pictures/faliang.png";
import faliang2 from "../../assets/pictures/faliang2.png";
import Button from "../button";
import "./greeting.scss";

const Greeting = () => {
  return (
    <section className="greeting">
      <figure>
        <div>
          <img id="faliang1" src={faliang} alt="Faliang" />
          <img id="faliang2" src={faliang2} alt="Faliang" />
        </div>
        <figcaption>
          <p>Hi, my name is</p>
          <h1>Valentina Vlasenko</h1>
          <p>Junior Frontend Developer</p>
          <Button text="Get in touch" />
        </figcaption>
      </figure>
    </section>
  );
};

export default Greeting;
