import React from "react";
import "./recievedFeedback.scss";
import anon from "./../../assets/avatars/person.png";
import deanon from "./../../assets/avatars/panda.png";
import { useSelector } from "react-redux";

const RecievedFeedback = () => {
  const feedbackArray = useSelector((state) => state.feedback);
  console.log(feedbackArray);
  return (
    <div className="recievedFeedback">
      <div className="recievedFeedback__wrapper">
        <h3>Recieved feedback from you</h3>
        {feedbackArray.map(({ author, namebox, textbox }) => (
          <div className="recievedFeedback__wrapper__comment">
            <figure>
              <img src={author === 'Anonymous' ? anon : deanon} />
              <figcaption>{author === 'Anonymous' ? 'Anon' : namebox}</figcaption>
            </figure>
            <input type="text" readOnly value={textbox} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecievedFeedback;
