import React from "react";
import { showModal } from "../../features/modalStatus/modalStatus";
import { useDispatch } from "react-redux";
import "./button.scss";

const Button = ({text}) => {
  const dispatch = useDispatch();
  return (
    <button className="mainBtn"
      onClick={(event) => {
        event.preventDefault();
        dispatch(showModal(true));
      }}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
