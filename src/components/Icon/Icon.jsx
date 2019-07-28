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
  }, []);

  let { id, title, type, source } = props;
  let lastClick = 0;

  const handleClick = e => {
    e.stopPropagation();
    let currClick = Date.now();
    if (currClick - lastClick < 500) {
      if (!windowOpen) setWindowOpen(true);
      let window = document.getElementById(id).style;
      let zIndex = window.zIndex;
      window.zIndex = selectWindow(zIndex);
      setTimeout(() => window.zIndex = selectWindow(zIndex), 200)
    }
    lastClick = currClick;
  };

  const closeWindow = () => {
    setWindowOpen(false);
  }

  return (
    <div className="icon" onClick={handleClick}>
      <div className={"icon__thumbnail -" + type}>
        {source ? (
          <img className="custom" alt="thumbnail" src={source} />
        ) : null}
      </div>
      <div className="icon__title">{title}</div>
      {windowDOM ? ReactDOM.createPortal(
      <Window {...props} close={closeWindow} open={windowOpen}/>,
      windowDOM
    ) :  null}
    </div>
  );
};

export default icon;
