import React, { useState } from "react";
import draw1 from "../../assets/pictures/1.jpg";
import draw2 from "../../assets/pictures/2.jpg";
import draw3 from "../../assets/pictures/3.jpg";
import draw4 from "../../assets/pictures/4.jpg";
import draw5 from "../../assets/pictures/5.jpg";
import draw6 from "../../assets/pictures/6.jpg";
import lubov from "../../assets/songs/lumen_lubov.mp3";
import rigged from "../../assets/songs/The_plot_in_you_RIGGED.mp3";
import yuhuachengdie from "../../assets/songs/chinese_song.mp3";
import pieces from "../../assets/songs/Red_Pieces.mp3";
import light from "../../assets/songs/Lights_Theme.mp3";
import sea from "../../assets/songs/BTS_Sea.mp3";
import love from "../../assets/characters/ai_love.png";
import law from "../../assets/characters/fa_law.png";
import light2 from "../../assets/characters/liang_light.png";
import cat from "../../assets/characters/mao_cat.png";
import warm from "../../assets/characters/nuan_warm.png";
import sky from "../../assets/characters/tian_sky.png";
import "./hobbies.scss";
import { useDispatch, useSelector } from "react-redux";
import { generateNumb } from "../../features/randomizer/randomizer";
import ButtonForRandom from "../buttonForRandom";
import SectionForHobbies from "../sectionForHobbies/sectionForHobbies";

const drawings = [draw1, draw2, draw3, draw4, draw5, draw6];
const songs = [lubov, rigged, yuhuachengdie, pieces, light, sea];
const characters = [love, law, light2, cat, warm, sky];

const Hobbies = () => {
  const { drawRandNumb, songRandNumb, charRandNumb } = useSelector(
    (state) => state.randomizer
  );
  const dispatch = useDispatch();
  const [showHobby, setShowHobby] = useState(false);

  const showRandMedia = () => {
    dispatch(generateNumb());
    setShowHobby(true);
  };
  console.log(drawRandNumb);
  return (
    <article className="hobbies">
      <div className="hobbies__btn">
        <button
          className={showHobby ? "hobbies__btn__small" : "hobbies__btn__big"}
          onClick={showRandMedia}
        >
          Amuse me!
        </button>
      </div>
      {showHobby ? (
        <div className="hobbies__container">
          <SectionForHobbies
            title="My random drawing"
            rand={drawRandNumb}
            item={drawings}
            itemName="drawings"
            text="Another"
          />

          <SectionForHobbies
            title="Random song from my playlist"
            rand={songRandNumb}
            item={songs}
            itemName="songs"
            text="Refresh"
          />

          <SectionForHobbies
            title="Choose a character for today"
            rand={charRandNumb}
            item={characters}
            itemName="characters"
            text="Tap"
          />
        </div>
      ) : null}
    </article>
  );
};
 
export default Hobbies;
