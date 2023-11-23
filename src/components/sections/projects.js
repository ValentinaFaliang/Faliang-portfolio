import React from "react";
import "./projects.scss";
import dictionary from "./../../assets/pictures/laptop_dictionary.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="title" id="projects">
        <h1>Recent projects</h1>
      </section>
      <section className="projects">
        <div className="projects__container">
          <div className="projects__container__left">
            <div className="projects__container__left__info">
              <div className="projects__container__left__info__title">
                <h3>法BKRS</h3>
              </div>
              <div className="projects__container__left__info__descr">
                <p>
                  {`Website with chinese-russian dictionary and built-in translator
                based on `}
                  <a href="https://mymemory.translated.net/" target="_blank">
                    MyMemmory
                  </a>
                  . Built with React. Designed by me.
                </p>
              </div>
              <div className="projects__container__left__info__tags">
                <p>
                  <strong>Development tools:</strong>
                </p>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Context</li>
                </ul>
              </div>
              <div className="projects__container__left__info__btn">
                <button onClick={() => window.location.replace("https://bkrs.info/")}>
                  <span>View project</span>
                </button>
              </div>
            </div>
          </div>
          <div className="projects__container__right">
            <picture>
              <img src={dictionary} alt="法BKRS website" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
