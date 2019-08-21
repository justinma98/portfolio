import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Icon.scss";
import { selectWindow } from "../../utils";
import Window from "../Window/Window";

const icon = props => {
  const [windowDOM, setWindowDOM] = useState(null);
  const [windowOpen, setWindowOpen] = useState(false);

  useEffect(() => {
    setWindowDOM(document.getElementById("windowSpawn"));
  }, []);

  useEffect(() => {
    switch (props.id) {
      case "desktop_readme":
        setTimeout(openWindow, 500);
        break;
    }
  }, [props.loading])

  let { id, title, type, source, multiSource } = props;
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

  const renderIcon = () => {
    if (source) {
      return <img className="custom" alt="thumbnail" src={source} />;
    }
    if (multiSource) {
      return (
        <div>
          <img className="multi -p3" alt="thumbnail" src={multiSource[2]} />
          <img className="multi -p2" alt="thumbnail" src={multiSource[1]} />
          <img className="multi -p1" alt="thumbnail" src={multiSource[0]} />
        </div>
      );
    }
  };

  return (
    <div className="icon" onClick={handleClick}>
      <div className={"icon__thumbnail -" + type}>
        {renderIcon()}
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
