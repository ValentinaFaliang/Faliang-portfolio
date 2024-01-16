import React from "react";
import { useDispatch } from "react-redux";
import { generateNumb } from "../../features/randomizer/randomizer";
import "./buttonForRandom.scss";

const ButtonForRandom = ({ item, text }) => {
  const dispatch = useDispatch();
  const mediaType = {
    drawings: "drawRandNumb",
    songs: "songRandNumb",
    characters: "charRandNumb",
  };
  return (
    <button
      className="randomBtn"
      onClick={() => dispatch(generateNumb(mediaType[item]))}
    >
      {text}
    </button>
  );
};
export default ButtonForRandom;
