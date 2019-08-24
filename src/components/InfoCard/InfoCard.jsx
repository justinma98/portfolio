import React from "react";
import Link from "../Link/Link";
import "./InfoCard.scss";
import "../Link/Link.scss";

const iconContainer = props => {
  const { title, description, src, link, github } = props;

  let linkCmpt;
  switch (typeof link) {
    case "boolean":
      linkCmpt = <Link {...props} title={props.windowTitle} />;
      break;
    case "string":
      linkCmpt = (
        <a href={link} target="_blank">
          <div className="link" />
        </a>
      );
      break;
  }

  return (
    <div className="infoCard">
      <div className="infoCard__pictureWrapper">
        <img
          className="infoCard__picture"
          alt="dev project picture"
          src={src}
        />
        <div className="infoCard__links">
          {linkCmpt}
          {github ? (
            <a href={github} target="_blank">
              <div className="infoCard__github" />
            </a>
          ) : null}
        </div>
      </div>
      <div className="infoCard__info">
        <h4 className="infoCard__title">{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

iconContainer.defaultProps = { link: null, github: null };

export default iconContainer;
