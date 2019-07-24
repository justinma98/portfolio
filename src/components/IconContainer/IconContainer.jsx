import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./IconContainer.scss";

const WIDTH = 100;
const HEIGHT = 113;

export default class IconContainer extends Component {
  getFlex = () => {
    console.log("1 0 " + (this.props.size + 1 + 1).toString() + "%")
    return "1 0 " + (100/(this.props.size + 1) + 1).toString() + "%";
  }

  getLength = () => {
    console.log((this.props.length * (this.props.direction === "row" ? WIDTH : HEIGHT)).toString())
    return (this.props.length * (this.props.direction === "row" ? WIDTH : HEIGHT)).toString() + "px";
  }

  render() {
    let props = this.props
    return (
      <div
        className="iconWrapper"
        style={{ flexDirection: props.direction, [props.direction === "row" ? "width" : "height"]:this.getLength()}}
      >
        {props.icons.map(icon => (
          <Icon
            id={icon.id}
            title={icon.iconTitle}
            selectWindow={props.selectWindow}
          />
        ))}
      </div>
    );
  }
}
