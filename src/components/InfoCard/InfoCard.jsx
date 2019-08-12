import React from "react";
import "./InfoCard.scss";

const iconContainer = props => {
  const { title, description, src } = props;
  return (
    <div className="infoCard">
      <div className="infoCard__pictureWrapper">
        <img className="infoCard__picture" alt="northern lights" src={src} />
      </div>
      <div className="infoCard__info">
        <h4 className="infoCard__title">{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default iconContainer;
