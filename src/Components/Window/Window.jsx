import React, { Component } from "react";
import * as Constants from "../../constants";
import "./Window.scss";

export default class Window extends Component {
  static defaultProps = {
    width: 400,
    height: 200,
    posX: 200,
    posY: 100
  };

  constructor(props) {
    super(props);

    this.state = {
      ease: true,
      width: 0,
      height: 0,
      posX: 0,
      posY: 0,
      offX: 0,
      offY: 0,
      zIndex: 0,
      isDragging: true
    };
  }

  componentDidMount = () => {
    let { width, height, posX, posY } = this.props;
    this.setState({
      width: width,
      height: height,
      posX: posX,
      posY: posY
    });
    document.addEventListener("mouseup", this.onMouseUp);
  };

  onMouseDownDrag = e => {
    this.setState({
      offX: this.state.posX - e.clientX,
      offY: this.state.posY - e.clientY,
      isDragging: true
    });
    document.addEventListener("mousemove", this.onMouseMove);
  };

  onMouseDownScale = e => {
    this.selectWindow();
    this.setState({
      ease: false,
      offX: this.state.width - e.clientX,
      offY: this.state.height - e.clientY,
      isDragging: false
    });
    document.addEventListener("mousemove", this.onMouseMove);
  };

  onMouseMove = e => {
    this.setState({
      [this.state.isDragging ? "posX" : "width"]: this.state.offX + e.clientX,
      [this.state.isDragging ? "posY" : "height"]: Math.max(
        this.state.offY + e.clientY,
        0
      )
    });
  };

  onMouseUp = () => {
    this.setState({
      ease: true
    });
    document.removeEventListener("mousemove", this.onMouseMove);
  };

  renderTitle = () => {
    let width =
      this.state.width < Constants.MIN_WIDTH
        ? Constants.MIN_WIDTH
        : this.state.width;
    let charLeft = Math.round(width / 8) - 17;
    let title = this.props.title;
    if (charLeft < title.length) {
      return title.slice(0, charLeft - 2) + "...";
    } else {
      return title;
    }
  };

  scale = maximize => {
    this.setState({
      width: Constants[maximize ? "MAX_WIDTH" : "MIN_WIDTH"],
      height: Constants[maximize ? "MAX_HEIGHT" : "MIN_HEIGHT"]
    });
  };

  close = () => {
    document.getElementById(this.props.id).style.display = "none";
    this.setState({
      width: this.props.width,
      height: this.props.height,
      posX: this.props.posX,
      posY: this.props.posY
    });
  };

  selectWindow = () => {
    this.setState({
      zIndex: this.props.selectWindow(this.state.zIndex)
    });
  };

  render() {
    let { id } = this.props;
    return (
      <div
        id={id}
        className="window"
        onMouseDown={this.selectWindow}
        style={{
          left: this.state.posX,
          top: this.state.posY,
          zIndex: this.state.zIndex
        }}
      >
        <div className="window__header" onPointerDown={this.onMouseDownDrag}>
          <span>{this.renderTitle()}</span>
          <div className="window__button -exit" onClick={this.close} />
          <div
            className="window__button -minimize"
            onClick={() => this.scale(false)}
          />
          <div
            className="window__button -maximize"
            onClick={() => this.scale(true)}
          />
        </div>
        <div
          className="window__content -picture"
          style={{
            transition: this.state.ease ? "all 0.5s ease" : null,
            width: this.state.width,
            height: this.state.height
          }}
        >
          <img className="picture" src="https://www.w3schools.com/w3css/img_lights.jpg"/>
        </div>
        <div className="window__scaleIcon" />
        <div
          className="window__scaleArea"
          onMouseDown={this.onMouseDownScale}
        />
      </div>
    );
  }
}
