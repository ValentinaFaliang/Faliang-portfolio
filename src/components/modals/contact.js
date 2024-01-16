import React, { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../features/modalStatus/modalStatus";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [showHideAnimation, setShowHideAnimation] = useState(false);
  const contactRef = useRef();
  const modalOpen = useSelector((state) => state.modalStatus);
  const dispatch = useDispatch();
  const {
    clearErrors,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const handleOutsideClick = (e) => {
    if (!contactRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const handleClose = () => {
    clearErrors();
    setShowHideAnimation(true);
    setTimeout(() => {
      setShowHideAnimation(false);
      dispatch(showModal(false));
    }, 1000);
  };

  if (!modalOpen) {
    return null;
  }

  const onSubmit = (data) => {
    handleClose();
  };


  return (
    <article onClick={handleOutsideClick} className="contact">
      <div
        ref={contactRef}
        className={`contact__container ${
          showHideAnimation ? "hideModal" : "showModal"
        }`}
      >
        <form
          className="contact__container__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="contact__container__form__closebtn">
            <span onClick={handleClose}>x</span>
          </div>
          <div className="contact__container__form__name">
            <input
              type="text"
              placeholder="First name"
              {...register("firstName")}
            />
            <input
              type="text"
              placeholder="Last name"
              {...register("lastName")}
            />
          </div>
          <div className="contact__container__form__contacts">
            <input
              type="email"
              placeholder={errors.message ? "Fill a field" : "Email"}
              {...register("email", { required: true })}
            />
            <input type="number" placeholder="Phone" {...register("number")} />
          </div>
          <div className="contact__container__form__subject">
            <input type="text" placeholder="Subject" {...register("subject")} />
          </div>
          <div className="contact__container__form__message">
            <textarea
              type="text"
              placeholder={errors.message ? "Fill a field" : "Message"}
              {...register("message", { required: true })}
            />
          </div>
          <div className="contact__container__form__buttons">
            <input type="submit" value="Send!"/>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Contact;
