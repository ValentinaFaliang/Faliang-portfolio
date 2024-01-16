import React from "react";
import ButtonForRandom from "../buttonForRandom";
import './sectionForHobbies.scss';

const SectionForHobbies = ({ title, rand, item, itemName, text }) => {
  return (
    <section className="hobbySection">
      <figure>
        <figcaption>
          <h2>{title}</h2>
          {itemName === "songs" ? (
            <audio key={rand} controls loop src={item[rand]}></audio>
          ) : (
            <img key={rand} src={item[rand]} />
          )}
          <ButtonForRandom item={itemName} text={text} />
        </figcaption>
      </figure>
    </section>
  );
};

export default SectionForHobbies;
