import React, { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../features/modalStatus/modalStatus";

const Contact = () => {
  const [showHideAnimation, setShowHideAnimation] = useState(false);
  const contactRef = useRef();
  const modalOpen = useSelector((state) => state.modalStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const handleOutsideClick = (e) => {
    if(!contactRef.current.contains(e.target)){
      handleClose();
    }
  };

  const handleClose = () => {
    setShowHideAnimation(true);
    setTimeout(() => {
      setShowHideAnimation(false);
      dispatch(showModal(false));
    }, 1000);
  };

  if (!modalOpen) {
    return null;
  }

  return (
    <article onClick={handleOutsideClick} className="contact">
      <div ref={contactRef} className={`contact__container ${showHideAnimation ? 'hideModal' : 'showModal'}`}>
        <form className="contact__container__form">
          <div className="contact__container__form__closebtn">
            <span onClick={handleClose}>x</span>
          </div>
          <div className="contact__container__form__name">
            <input type="text" placeholder="First name"></input>
            <input type="text" placeholder="Last name"></input>
          </div>
          <div className="contact__container__form__contacts">
            <input type="email" placeholder="Email"></input>
            <input type="number" placeholder="Phone"></input>
          </div>
          <div className="contact__container__form__subject">
            <input type="text" placeholder="Subject"></input>
          </div>
          <div className="contact__container__form__message">
            <textarea type="text" placeholder="Message"></textarea>
          </div>
          <div className="contact__container__form__buttons">
            <input type="button" value="Send!"></input>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Contact;
