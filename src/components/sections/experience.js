import React from "react";
import "./experience.scss";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <header className="experience__header">
        <h1>Experience</h1>
      </header>
      <main className="experience__main">
        <dl>
          <dt>Freelance frontend developer</dt>
          <dd>
            <details>
              <summary>12/2021 - now</summary>
              <p>
                I have been doing freelance job since December 2021 till now. My
                main occupation is creating the visual part of web-sites. The
                tech stack at projects consists primarily of:
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                </ul>
              </p>
            </details>
          </dd>
          <dt>Chinese translator</dt>
          <dd>
            <details>
              <summary>6/2020 - now</summary>
              <p>
                I have been doing chinese translator job since June 2020 till
                now. I am translating:
                <ul>
                  <li>poems</li>
                  <li>news</li>
                  <li>films</li>
                  <li>TV shows</li>
                  <li>serials</li>
                  <li>comics</li>
                </ul>
              </p>
            </details>
          </dd>
          <dt>Chinese tutor</dt>
          <dd>
            <details>
              <summary>7/2021 - now</summary>
              <p>
                I have been doing chinese tutor job since July 2021 till now. I
                teach students such modules as:
                <ul>
                  <li>grammar</li>
                  <li>speaking</li>
                  <li>pronunciation</li>
                  <li>preparing for HSK 1-5</li>
                  <li>reading</li>
                  <li>translating</li>
                </ul>
              </p>
            </details>
          </dd>
        </dl>
      </main>
    </section>
  );
};

export default Experience;
