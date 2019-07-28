import React from "react";
import Icon from "../Icon/Icon";
import "./IconContainer.scss";
import { ICON } from "../../constants";

const iconContainer = props => {
  const { direction, length, icons } = props;

  const toPx = n => {
    return n.toString() + "px";
  };

  const getStyle = () => {
    return direction === "row"
      ? { flexDirection: direction, width: toPx(ICON.WIDTH * length) }
      : { flexDirection: direction, height: toPx(ICON.HEIGHT * length) };
  };

  return (
    <div className="iconWrapper" style={getStyle()}>
      {icons.map(icon => (
        <Icon key={icon.id} {...icon} />
      ))}
    </div>
  );
};

export default iconContainer;
