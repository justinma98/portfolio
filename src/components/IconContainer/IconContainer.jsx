import React from "react";
import Icon from "../Icon/Icon";
import "./IconContainer.scss";

const iconContainer = props => {
  const { direction, icons } = props;

  const getStyle = () => {
    return direction === "row"
      ? { flexDirection: direction, width: "100%" }
      : { flexDirection: direction, height: "100%" };
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
