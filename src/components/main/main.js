import React from "react";
import "./main.scss";
import white from "../../assets/flowers/white3.png";
import white2 from "../../assets/flowers/white4.png";
import yellow from "../../assets/flowers/yellow3.png";
import yellow2 from "../../assets/flowers/yellow2.png";
import purple from "../../assets/flowers/purple3.png";
import purple2 from "../../assets/flowers/purple2.png";
import {Greeting, About, Hobbies } from "../sections";

const flowers = [white, white2, yellow, yellow2, purple, purple2];

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__container__flowers">
          {flowers.map((flower, index) => {
            return <img key={index} src={flower} />;
          })}
        </div>
        <Greeting/>
        <About/>
        <Hobbies/>
      </div>
    </main>
  );
};

export default Main;
