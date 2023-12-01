import React from "react";
import './recievedFeedback.scss';
import avatar from './../../assets/avatars/person.png';

const RecievedFeedback = () => {
    return (
        <div className="recievedFeedback">
<div className="recievedFeedback__wrapper">
    <h3>Recieved feedback from you</h3>
    <div className="recievedFeedback__wrapper__comment">
        <figure>
        <img src={avatar}/>
        <figcaption>Anon</figcaption>
        </figure>
    <input type="text" readOnly value={`It's nice to cooperate with you!`}/>
    </div>
</div>
        </div>
    )
};

export default RecievedFeedback;