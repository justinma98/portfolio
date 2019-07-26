import React, { useState } from "react";
import "./Icon.scss";
import { selectWindow } from "../../utils";

const icon = (props) => {
  const [lastClick, setLastClick] = useState(0);

  const handleClick = () => {
    let currClick = Date.now();
    if (currClick - lastClick < 500) {
      let window = document.getElementById(props.id).style;
      let zIndex = window.zIndex
      window.zIndex = selectWindow(zIndex);
      window.display = null;
    }
    setLastClick(currClick);
  };

  let { title } = props;
  return (
    <div className="icon" onClick={handleClick}>
      <div className="icon__thumbnail" />
      <div className="icon__title">{title}</div>
    </div>
  );
}

export default icon
