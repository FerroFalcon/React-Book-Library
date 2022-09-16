import React from "react";
import "./Card.css";

function Card({ id, title, author, image }) {
  return (
    <div className="card_wrapper">
      <div className="image_wrapper">
        <img className="card_image" src={image} alt="book cover" />
      </div>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
    </div>
  );
}

export default Card;
