import React from "react";
import Link from "../Link/Link";
import "./InfoCard.scss";
import "../Link/Link.scss";

const iconContainer = props => {
  const { title, description, src, link, github } = props;

  const openLink = url => {
    const win = window.open(url, "_blank");
    if (win) win.focus();
  };

  let linkCmpt;
  switch(typeof link){
    case "boolean":
      linkCmpt = <Link {...props} title={props.windowTitle} />
      break;
    case "string":
      linkCmpt = <div className="link" onClick={() => openLink(link)}/>
      break;
  }

  return (
    <div className="infoCard">
      <div className="infoCard__pictureWrapper">
        <img className="infoCard__picture" alt="dev project picture" src={src} ></img>
        <div className="infoCard__links">
          {linkCmpt}
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

iconContainer.defaultProps = { link: null, github: null };

export default iconContainer;
