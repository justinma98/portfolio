import React from "react";
import Icon from "../Icon/Icon";
import "./IconContainer.scss";

const iconContainer = ({direction, length, selectWindow, icons}) => {
  const WIDTH = 100;
  const HEIGHT = 120;

  const toPx = n => {
    return n.toString() + "px";
  };

  const getStyle = () => {
    return direction === "row"
      ? { flexDirection: direction, width: toPx(WIDTH * length) }
      : { flexDirection: direction, height: toPx(HEIGHT * length) };
  };

  return (
    <div className="iconWrapper" style={getStyle()}>
      {icons.map(icon => (
        <Icon
          key={icon.id}
          id={icon.id}
          title={icon.iconTitle}
          selectWindow={selectWindow}
        />
      ))}
    </div>
  );
};

export default iconContainer;
