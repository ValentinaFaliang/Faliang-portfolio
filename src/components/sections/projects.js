import React from "react";
import "./projects.scss";
import dictionary from "./../../assets/pictures/laptop_dictionary_big.png";
import dictionary900 from './../../assets/pictures/laptop_dictionary_900.png';

const Projects = () => {
  const stack = ['HTML', 'CSS/SCSS', 'React', 'Redux', 'Context']
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
                  {stack.map((el) => {
                    return (
                      <li>{el}</li>
                    )
                  })}
                </ul>
              </div>
              <div className="projects__container__left__info__btn">
                <button onClick={() => window.location.replace("https://bkrs.info/")}>
                  <span>View project (currently not working)</span>
                </button>
              </div>
            </div>
          </div>
          <div className="projects__container__right">
            <picture>
              {/* <source media="(max-width: 930px)" srcset={dictionary900}/> */}
              <img src={dictionary} alt="法BKRS website" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
