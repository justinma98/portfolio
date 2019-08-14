import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Link.scss";
import { selectWindow } from "../../utils";
import Window from "../Window/Window";

const link = props => {
  const [windowDOM, setWindowDOM] = useState(null);
  const [windowOpen, setWindowOpen] = useState(false);

  useEffect(() => {
    setWindowDOM(document.getElementById("windowSpawn"));
  }, []);

  let { id } = props;

  const handleClick = e => {
    e.stopPropagation();
    openWindow();
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

  return (
    <div onClick={handleClick}>
      <div className="link"/>
      {windowDOM
        ? ReactDOM.createPortal(
            <Window {...props} close={closeWindow} open={windowOpen} />,
            windowDOM
          )
        : null}
    </div>
  );
};

export default link;
