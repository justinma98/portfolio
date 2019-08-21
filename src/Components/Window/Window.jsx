import React, { useState, useEffect } from "react";
import "./Window.scss";
import { selectWindow, windowComplete } from "../../utils";
import { WINDOW } from "../../constants";

const window = props => {
  const [size, setSize] = useState(props.size);
  const [pos, setPos] = useState(props.pos);
  const [ease, setEase] = useState("all 0.3s ease-out");
  const [zIndex, setZIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  let { id, type, title, content, close, open } = props;
  let offset = { x: 0, y: 0 };
  let isDrag = true;

  useEffect(() => {
    if (open) openWindow();
  }, [open]);

  useEffect(() => {
    setTimeout(() => {
      closeWindow();
      windowComplete();
    }, 400);
  }, []);

  const onMouseDown = (e, drag) => {
    mySelectWindow(e);
    setEase(null);
    isDrag = drag;
    const attr = isDrag ? pos : size;
    offset = { x: attr.x - e.clientX, y: attr.y - e.clientY };
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
    if (size.x === 0) return "...";
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
    setSize({ x: 0, y: 0 });
    setTimeout(closeWindowHelper, 280);
  };

  const closeWindowHelper = () => {
    setOpacity(0);
    setEase("all 0.3s ease-out");
    setPos({ x: 0, y: -50 });
    close();
  };

  const openWindow = () => {
    setOpacity(1);
    setSize(props.size);
    setPos(props.pos);
    setTimeout(openWindowHelper, 280);
  };

  const openWindowHelper = () => {
    setEase("all 0.5s ease");
  };

  const mySelectWindow = e => {
    e.stopPropagation();
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
        zIndex: zIndex,
        opacity: opacity
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
        {open ? (
          <div>
            <div className="window__scaleIcon" />
            <div
              className="window__scaleArea"
              onMouseDown={e => onMouseDown(e, false)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

window.defaultProps = { size: { x: 500, y: 300 } };

export default window;
