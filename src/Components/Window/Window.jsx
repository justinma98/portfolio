import React, { useState, useEffect } from "react";
import "./Window.scss";
import { selectWindow } from "../../utils";

const MAX_WIDTH = 800;
const MAX_HEIGHT = 500;
const MIN_WIDTH = 200;
const MIN_MIN_WIDTH = 160;
const MIN_HEIGHT = 120;

const window = props => {
  const [ease, setEase] = useState(true);
  const [size, setSize] = useState({ x: props.width, y: props.height });
  const [pos, setPos] = useState({ x: props.posX, y: props.posY });
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => document.addEventListener("mouseup", onMouseUp), []);

  let offset = { x: 0, y: 0 };
  let isDragging = true;

  const onMouseDownDrag = e => {
    offset = { x: pos.x - e.clientX, y: pos.y - e.clientY };
    isDragging = true;
    document.addEventListener("mousemove", onMouseMove);
  };

  const onMouseDownScale = e => {
    mySelectWindow();
    setEase(false);
    offset = { x: size.x - e.clientX, y: size.y - e.clientY };
    isDragging = false;
    document.addEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = e => {
    const newState = {
      x: offset.x + e.clientX,
      y: Math.max(offset.y + e.clientY, 0)
    };
    if (isDragging) {
      setPos(newState);
    } else {
      setSize(newState);
    }
  };

  const onMouseUp = () => {
    setEase(true);
    document.removeEventListener("mousemove", onMouseMove);
  };

  const renderTitle = () => {
    let width = size.x < MIN_MIN_WIDTH ? MIN_MIN_WIDTH : size.x;
    let charLeft = Math.round(width / 8) - 17;
    let title = props.title;
    if (charLeft < title.length) {
      return title.slice(0, charLeft - 2) + "...";
    } else {
      return title;
    }
  };

  const scale = maximize => {
    setSize({
      x: maximize ? MAX_WIDTH : MIN_WIDTH,
      y: maximize ? MAX_HEIGHT : MIN_HEIGHT
    });
  };

  const close = () => {
    document.getElementById(props.id).style.display = "none";
    setSize({ x: props.width, y: props.height });
    setPos({ x: props.posX, y: props.posY });
  };

  const mySelectWindow = () => {
    setZIndex(selectWindow(zIndex));
  };

  let { id, type, content } = props;
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
      <div className="window__header" onPointerDown={onMouseDownDrag}>
        <span>{renderTitle()}</span>
        <div className="window__button -exit" onClick={close} />
        <div
          className="window__button -minimize"
          onClick={() => scale(false)}
        />
        <div className="window__button -maximize" onClick={() => scale(true)} />
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
      <div className="window__scaleArea" onMouseDown={onMouseDownScale} />
    </div>
  );
};

export default window;
