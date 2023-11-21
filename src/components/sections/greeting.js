import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import faliang from "../../assets/pictures/faliang.png";
import faliang2 from "../../assets/pictures/faliang2.png";
import "./greeting.scss";


const Greeting = () => {
  const navigate = useNavigate();
  const showModal = () => {
    navigate('contact')
  };

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
            <button onClick={showModal}>
              <span>Get in touch</span>
            </button>
          </figcaption>
        </figure>
      </section>
  );
};

export default Greeting;
