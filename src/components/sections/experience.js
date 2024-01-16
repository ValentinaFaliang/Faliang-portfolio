import React, { useState } from "react";
import "./experience.scss";

const jobs = [
  {
    title: "Freelance frontend developer",
    summary: "01/2023 - now",
    description: `I have been doing freelance job since December 2021 till now. My
    main occupation is creating the visual part of web-sites. The
    tech stack at projects consists primarily of:`,
    listOfStack: ["HTML", "CSS", "SCSS", "JavaScript", "React", "Redux"],
  },
  {
    title: "Chinese translator",
    summary: "01/2023 - now",
    description: `I have been doing chinese translator job since June 2020 till
      now. I am translating from chinese to russian:`,
    listOfStack: ["poems", "news", "films", "TV shows", "serials", "comics"],
  },
  {
    title: "Chinese tutor",
    summary: "01/2023 - now",
    description: `I have been doing chinese tutor job since July 2021 till now. I
      teach students such modules as:`,
    listOfStack: [
      "grammar",
      "speaking",
      "pronunciation",
      "preparing for HSK 1-5",
      "reading",
      "translating",
    ],
  },
];

const Details = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="experience__main__container__details__item">
      <summary onClick={() => setOpen(!open)}>{job.summary}</summary>
      {open ? (
        <>
          <p open={open}>{job.description}</p>
          <ul>
            {job.listOfStack.map((stack) => {
              return <li key={stack}>{stack}</li>;
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <header className="experience__header">
        <h1>Experience</h1>
      </header>
      <main className="experience__main">
        <div className="experience__main__container">
          {jobs.map((job) => {
            return (
              <div
                className="experience__main__container__title"
                key={job.title}
              >
                <p className="experience__main__container__title__name">{job.title}</p>
                <div className="experience__main__container__details">
                  <Details job={job} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default Experience;
