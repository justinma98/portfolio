import React, { useState } from "react";
import "./Window.scss";
import { selectWindow } from "../../utils";

const MAX_WIDTH = 800;
const MAX_HEIGHT = 500;
const MIN_WIDTH = 200;
const MIN_MIN_WIDTH = 160;
const MIN_HEIGHT = 120;

const window = props => {
  const [size, setSize] = useState(props.size);
  const [pos, setPos] = useState(props.pos);
  const [zIndex, setZIndex] = useState(0);
  const [ease, setEase] = useState(true);

  let { id, type, title, content } = props;
  let offset = { x: 0, y: 0 };
  let isDrag = true;

  const onMouseDown = (e, drag) => {
    isDrag = drag;
    const attr = isDrag ? pos : size;
    offset = { x: attr.x - e.clientX, y: attr.y - e.clientY };
    setEase(false);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = e => {
    const newState = {
      x: offset.x + e.clientX,
      y: Math.max(offset.y + e.clientY, 0)
    };
    isDrag ? setPos(newState) : setSize(newState);
  };

  const onMouseUp = () => {
    setEase(true);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const renderTitle = () => {
    let width = size.x < MIN_MIN_WIDTH ? MIN_MIN_WIDTH : size.x;
    let charLeft = Math.round(width / 8) - 17;
    return charLeft < title.length
      ? title.slice(0, charLeft - 2) + "..."
      : title;
  };

  const scaleWindow = maximize => {
    setSize({
      x: maximize ? MAX_WIDTH : MIN_WIDTH,
      y: maximize ? MAX_HEIGHT : MIN_HEIGHT
    });
  };

  const closeWindow = () => {
    document.getElementById(id).style.display = "none";
    setSize(props.size);
    setPos(props.pos);
  };

  const mySelectWindow = () => {
    setZIndex(selectWindow(zIndex));
  };

  return (
    <div
      id={id}
      className="window"
      onMouseDown={mySelectWindow}
      style={{
        left: pos.x,
        top: pos.y,
        zIndex: zIndex
      }}
    >
      <div className="window__header" onMouseDown={e => onMouseDown(e, true)}>
        <span>{renderTitle()}</span>
        <div 
          className="window__button -exit" 
          onClick={closeWindow} 
        />
        <div
          className="window__button -minimize"
          onClick={() => scaleWindow(false)}
        />
        <div
          className="window__button -maximize"
          onClick={() => scaleWindow(true)}
        />
      </div>
      <div
        className={"window__content -" + type}
        style={{
          transition: ease ? "all 0.5s ease" : null,
          width: size.x,
          height: size.y
        }}
      >
        {content}
      </div>
      <div className="window__scaleIcon" />
      <div
        className="window__scaleArea"
        onMouseDown={e => onMouseDown(e, false)}
      />
    </div>
  );
};

export default window;
