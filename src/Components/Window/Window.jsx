import React, { Component } from "react";
import * as Constants from "../../constants";
import "./Window.scss";

export default class Window extends Component {
  static defaultProps = {
    width: 400,
    height: 200,
    title: "New Window",
    zIndex: 0
  };

  constructor(props) {
    super(props);

    this.state = {
      ease: true,
      width: 0,
      height: 0,
      posX: 200,
      posY: 100,
      offX: 0,
      offY: 0,
      zIndex: 0,
      isDragging: true,
      title: "",
      open: true
    };

    this.onMouseDownDrag = this.onMouseDownDrag.bind(this);
    this.onMouseDownScale = this.onMouseDownScale.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.scale = this.scale.bind(this);
    this.close = this.close.bind(this);
    this.selectWindow = this.selectWindow.bind(this);
  }

  componentDidMount() {
    let { width, height, zIndex, title } = this.props;
    this.setState({
      width: width,
      height: height,
      zIndex: zIndex,
      title: title
    });
    document.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseDownDrag(e) {
    this.setState({
      offX: this.state.posX - e.clientX,
      offY: this.state.posY - e.clientY,
      isDragging: true
    });
    document.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseDownScale(e) {
    this.props.selectWindow();
    this.setState({
      ease: false,
      offX: this.state.width - e.clientX,
      offY: this.state.height - e.clientY,
      isDragging: false
    });
    document.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(e) {
    this.setState({
      [this.state.isDragging ? "posX" : "width"]: this.state.offX + e.clientX,
      [this.state.isDragging ? "posY" : "height"]: this.state.offY + e.clientY
    });
  }

  onMouseUp() {
    this.setState({
      ease: true
    });
    document.removeEventListener("mousemove", this.onMouseMove);
  }

  renderTitle() {
    let width = this.state.width < 130 ? 130 : this.state.width;
    let charLeft = Math.round(width / 10) - 7;
    if (charLeft < this.state.title.length) {
      return this.state.title.slice(0, charLeft - 2) + "...";
    } else {
      return this.state.title;
    }
  }

  scale(maximize) {
    this.setState({
      width: Constants[maximize ? "MAX_WIDTH" : "MIN_WIDTH"],
      height: Constants[maximize ? "MAX_HEIGHT" : "MIN_HEIGHT"]
    });
  }

  close() {
    this.setState({
      open: false,
      width: this.props.width,
      height: this.props.height,
      posX: this.props.posX,
      posY: this.props.posY
    });
  }

  selectWindow() {
    this.setState({
      zIndex: this.props.selectWindow(this.state.zIndex)
    });
  }

  render() {
    return (
      <div
        className="window"
        onMouseDown={this.selectWindow}
        style={{
          left: this.state.posX,
          top: this.state.posY,
          display: this.state.open ? null : "none",
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
          className="window__content"
          style={{
            transition: this.state.ease ? "all 0.5s ease" : null,
            width: this.state.width,
            height: this.state.height
          }}
        >
          Here is a sentence. and here is a
          reallyreallylongwordthatwillgethyphenated. wow super duper cool
        </div>
        <div className="window__scale">
          <div className="icon" />
          <div className="area" onMouseDown={this.onMouseDownScale} />
        </div>
      </div>
    );
  }
}
