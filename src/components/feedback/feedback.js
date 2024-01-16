import React, { useEffect, useState } from "react";
import "./feedback.scss";
import RecievedFeedback from "../recievedFeedback";
import envelope from "./../../assets/envelope/envelope.png";
import { Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createFeedback } from "../../features/feedback/feedback";

const Feedback = () => {
  const [published, setPublished] = useState(false);
  const [send, setSend] = useState(false);
  const {
    resetField,
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { author: "Anonymous" },
  });
  const authorValue = watch("author");
  const dispatch = useDispatch();

  useEffect(() => {
    if (authorValue === "Anonymous") {
      resetField("namebox");
    }
  }, [authorValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSend(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
      setSend(false);
    };
  }, [published]);

  const onSubmit = (data) => {
    setPublished(true);
    dispatch(createFeedback(data))
  };
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="feedback__wrapper__inputBlock__form"
              >
                <div className="feedback__wrapper__inputBlock__form__name">
                  <div className="feedback__wrapper__inputBlock__form__name__anon">
                    <input
                      type="radio"
                      id="anon"
                      value="Anonymous"
                      {...register("author")}
                    />
                    <label for="anon">Anonymous</label>
                  </div>
                  <div className="feedback__wrapper__inputBlock__form__name__notanon">
                    <input
                      type="radio"
                      id="notanon"
                      value="Name"
                      {...register("author")}
                    />
                    <label for="namebox">Your name:</label>
                    <input
                      type="text"
                      placeholder={errors.namebox ? "Fill a field" : ""}
                      disabled={authorValue === "Anonymous"}
                      {...register("namebox", {
                        required: authorValue !== "Anonymous",
                      })}
                    />
                  </div>
                </div>
                <div className="feedback__wrapper__inputBlock__form__comment">
                  <textarea
                    type="text"
                    placeholder={errors.textbox ? "Fill a field" : "Type a comment"}
                    {...register("textbox", { required: true })}
                  />
                  <button type="submit">
                    <span>Publish</span>
                  </button>
                </div>
              </form>
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
