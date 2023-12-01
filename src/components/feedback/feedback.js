import React, { useEffect, useState } from "react";
import "./feedback.scss";
import RecievedFeedback from "../recievedFeedback";
import envelope from "./../../assets/envelope/envelope.png";
import { Outlet } from "react-router-dom";
const Feedback = () => {
  const [published, setPublished] = useState(false);
  const [send, setSend] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSend(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
      setSend(false);
    };
  }, [published]);
  return (
    <article className="feedback">
      <div className="feedback__wrapper">
        {published ? (
          send ? null : (
            <div className="feedback__wrapper__inputBlock__envelope">
              <img src={envelope} />
            </div>
          )
        ) : (
          <>
            <section className="feedback__wrapper__inputBlock">
              <h2>You can give feedback to me here</h2>
              <div className="feedback__wrapper__inputBlock__name">
                <div className="feedback__wrapper__inputBlock__name__anon">
                  <input
                    type="radio"
                    id="anon"
                    name="author"
                    value="Anonymous"
                    checked
                  />
                  <label for="anon">Anonymous</label>
                </div>
                <div className="feedback__wrapper__inputBlock__name__notanon">
                  <input type="radio" id="notanon" name="author" value="Name" />
                  <label for="namebox">Your name:</label>
                  <input type="text" name="namebox" />
                </div>
              </div>
              <div className="feedback__wrapper__inputBlock__comment">
                <textarea type="text" name="textbox" />
                <button onClick={() => setPublished(true)}>
                  <span>Publish</span>
                </button>
              </div>
            </section>
          </>
        )}
        <section>
          <RecievedFeedback />
        </section>
      </div>
      <Outlet />
    </article>
  );
};

export default Feedback;
