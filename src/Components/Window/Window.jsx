import React, { useState, useEffect } from "react";
import "./Window.scss";
import { selectWindow } from "../../utils";
import { WINDOW } from "../../constants";

const window = props => {
  const [size, setSize] = useState(props.size);
  const [pos, setPos] = useState(props.pos);
  const [ease, setEase] = useState("all 0.5s ease");
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => console.log("HELLO"), [props])

  let { id, type, title, content } = props;
  let offset = { x: 0, y: 0 };
  let isDrag = true;

  const onMouseDown = (e, drag) => {
    isDrag = drag;
    const attr = isDrag ? pos : size;
    offset = { x: attr.x - e.clientX, y: attr.y - e.clientY };
    setEase(null);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = e => {
    isDrag
      ? setPos({
          x: offset.x + e.clientX,
          y: Math.max(offset.y + e.clientY, 0)
        })
      : setSize({
          x: Math.max(offset.x + e.clientX, WINDOW.MIN_WIDTH),
          y: Math.max(offset.y + e.clientY, WINDOW.MIN_HEIGHT)
        });
  };

  const onMouseUp = () => {
    setEase("all 0.5s ease");
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const renderTitle = () => {
    if (size.x === 0) return "..."
    let width = size.x < WINDOW.MIN_WIDTH ? WINDOW.MIN_WIDTH : size.x;
    let charLeft = Math.round(width / 8) - 17;
    return charLeft < title.length
      ? title.slice(0, charLeft - 2) + "..."
      : title;
  };

  const scaleWindow = maximize => {
    setSize({
      x: maximize ? WINDOW.MAX_WIDTH : WINDOW.MIN_WIDTH,
      y: maximize ? WINDOW.MAX_HEIGHT : WINDOW.MIN_HEIGHT
    });
  };

  const closeWindow = () => {
    setEase("all 0.3s ease-in");
    setTimeout(resetWindow, 280);
    setSize({ x: 0, y: 0 });
  };

  const resetWindow = () => {
    document.getElementById(id).style.display = "none";
    setEase("all 0.5s ease");
    setSize(props.size);
    setPos(props.pos);
  };

  const handleOpen = () => {
    console.log("OPEN");
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
        <div className="window__button -exit" onClick={closeWindow} />
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
          transition: ease,
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
