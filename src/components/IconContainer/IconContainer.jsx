import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./IconContainer.scss";

const WIDTH = 100;
const HEIGHT = 120;

export default class IconContainer extends Component {
  toPx = n => {
    return n.toString() + "px";
  };

  getStyle = () => {
    console.log("ICONS", this.props.icons)
    let { direction, length } = this.props;
    return direction === "row"
      ? { flexDirection: direction, width: this.toPx(WIDTH * length) }
      : { flexDirection: direction, height: this.toPx(HEIGHT * length) };
  };

  render() {
    let { selectWindow, icons } = this.props;
    return (
      <div className="iconWrapper" style={this.getStyle()}>
        {icons.map(icon => (
          <Icon
            id={icon.id}
            title={icon.iconTitle}
            selectWindow={selectWindow}
          />
        ))}
      </div>
    );
  }
}
