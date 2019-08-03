import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Icon.scss";
import { selectWindow } from "../../utils";
import Window from "../Window/Window";

const icon = props => {
  const [windowDOM, setWindowDOM] = useState(null);
  const [windowOpen, setWindowOpen] = useState(false);

  useEffect(() => {
    setWindowDOM(document.getElementById("windowWrapper"));
    switch (props.id) {
      case "desktop_readme":
        setTimeout(openWindow, 300);
        break;
    }
  }, []);

  let { id, title, type, source } = props;
  let lastClick = 0;
  let titleClasses = ["icon__title"];

  const handleClick = e => {
    e.stopPropagation();
    let currClick = Date.now();
    if (currClick - lastClick < 500) openWindow();
    lastClick = currClick;
  };

  const openWindow = () => {
    if (!windowOpen) setWindowOpen(true);
    let window = document.getElementById(id).style;
    let zIndex = window.zIndex;
    window.zIndex = selectWindow(zIndex);
    setTimeout(() => (window.zIndex = selectWindow(zIndex)), 200);
  };

  const closeWindow = () => {
    setWindowOpen(false);
  };

  if (id.includes("desktop")) {
    titleClasses.push("-desktop");
  }

  return (
    <div className="icon" onClick={handleClick}>
      <div className={"icon__thumbnail -" + type}>
        {source ? (
          <img className="custom" alt="thumbnail" src={source} />
        ) : null}
      </div>
      <div className={titleClasses.join(" ")}>{title}</div>
      {windowDOM
        ? ReactDOM.createPortal(
            <Window {...props} close={closeWindow} open={windowOpen} />,
            windowDOM
          )
        : null}
    </div>
  );
};

export default icon;
