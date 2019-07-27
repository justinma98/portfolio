import React, { useState } from "react";
import "./Icon.scss";
import { selectWindow } from "../../utils";

const icon = props => {
  const [lastClick, setLastClick] = useState(0);
  const { id, title, type, source } = props;

  const handleClick = () => {
    let currClick = Date.now();
    if (currClick - lastClick < 500) {
      let window = document.getElementById(id).style;
      let zIndex = window.zIndex;
      window.zIndex = selectWindow(zIndex);
      window.display = "block";
    }
    setLastClick(currClick);
  };

  return (
    <div className="icon" onClick={handleClick}>
      <div className={"icon__thumbnail -" + type}>
        {source ? (
          <img className="custom" alt="thumbnail" src={source} />
        ) : null}
      </div>
      <div className="icon__title">{title}</div>
    </div>
  );
};

export default icon;
