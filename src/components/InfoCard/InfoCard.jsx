import React from "react";
import "./InfoCard.scss";
import Link from "../Link/Link";

const iconContainer = props => {
  const { title, description, src, link, github } = props;

  const openLink = url => {
    const win = window.open(url, "_blank");
    if (win) win.focus();
  };

  return (
    <div className="infoCard">
      <div className="infoCard__pictureWrapper">
        <img className="infoCard__picture" alt="northern lights" src={src} />
        <div className="infoCard__links">
          {link ? <Link {...props} title={props.windowTitle} /> : null}
          {github ? (
            <div
              className="infoCard__github"
              onClick={() => openLink(github)}
            />
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

iconContainer.defaultProps = { link: false, github: null };

export default iconContainer;
