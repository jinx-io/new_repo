import React from "react";
import "./imageCard.scss";

export default function ImageCard(props) {
  return (
    <div className="imageCard">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="description">
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
