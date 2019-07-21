import React, { Component } from "react";
import "./Window.scss";

export default class Window extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 400,
      height: 200,
      posX: 200,
      posY: 100,
      offX: 0,
      offY: 0,
      zIndex: 0,
      isDragging: true
    };

    this.onMouseDownDrag = this.onMouseDownDrag.bind(this);
    this.onMouseDownScale = this.onMouseDownScale.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
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
    this.setState({
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
    document.removeEventListener("mousemove", this.onMouseMove);
  }

  render() {
    return (
      <div
        className="window"
        style={{
          left: this.state.posX,
          top: this.state.posY
        }}
      >
        <div
          className="window__header"
          onMouseDown={this.onMouseDownDrag}
          onMouseUp={this.onMouseUp}
        >
          <span>hello</span>
          <div className="window__button -exit" />
          <div className="window__button -minimize" />
          <div className="window__button -maximize" />
        </div>
        <div
          className="window__content"
          style={{ width: this.state.width, height: this.state.height }}
        >
          hello
        </div>
        <div
          className="window__scale"
          onMouseDown={this.onMouseDownScale}
          onMouseUp={this.onMouseUp}
        />
      </div>
    );
  }
}
