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
import {
  generateNumb,
} from "../../features/randomizer/randomizer";

const drawings = [draw1, draw2, draw3, draw4, draw5, draw6];
const songs = [lubov, rigged, yuhuachengdie, pieces, light, sea];
const characters = [love, law, light2, cat, warm, sky];

const mediaType = {
  drawings: 'drawRandNumb',
  songs: 'songRandNumb',
  characters: 'charRandNumb'
}

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

  return (
    <article className="hobbies">
      <div className= "hobbies__btn">
        <button className={showHobby? "hobbies__btn__small" : "hobbies__btn__big"} onClick={showRandMedia}>Amuse me!</button>
      </div>
      {showHobby ? (
        <div className="hobbies__container">
          <section className="hobbies__container__drawing">
            <h2>My random drawing</h2>
            <button onClick={() => dispatch(generateNumb(mediaType.drawings))}>Another</button>
            <div>
              <img key={drawRandNumb} src={drawings[drawRandNumb]} />
            </div>
          </section>
          <section className="hobbies__container__music">
            <figure>
              <figcaption>
                <h2>Random song from my playlist</h2>
                <button onClick={() => dispatch(generateNumb(mediaType.songs))}>
                  Refresh
                </button>
                <audio key={songRandNumb} controls loop src={songs[songRandNumb]}></audio>
              </figcaption>
            </figure>
          </section>
          <section className="hobbies__container__character">
            <h2>Choose a character for today</h2>
            <button onClick={() => dispatch(generateNumb(mediaType.characters))}>Tap</button>
            <div>
              <img key={charRandNumb} src={characters[charRandNumb]} />
            </div>
          </section>
        </div>
      ) : null}
    </article>
  );
};

export default Hobbies;
