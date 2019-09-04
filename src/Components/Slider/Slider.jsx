import React, { useState, useRef } from "react";
import "./Slider.scss";

const slider = props => {
  // const [percent, setPercent] = useState(props.percent);
  const [mouseDown, setMouseDown] = useState(false);
  const sliderRef = useRef(null);

  let { percent, onChange } = props;

  const updateSlider = pos => {
    let rect = sliderRef.current.getBoundingClientRect();
    let knobPos = Math.max(rect.left, Math.min(rect.right, pos));
    let knobPercent = (100 * (knobPos - rect.left)) / (rect.right - rect.left);

    //setPercent(knobPercent);
    onChange(knobPercent);
  };

  const handleMouseDown = e => {
    setMouseDown(true);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    updateSlider(e.clientX);
  };

  const handleMouseMove = e => {
    updateSlider(e.clientX);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <div ref={sliderRef} className="slider" onMouseDown={handleMouseDown}>
      <div className="slider__empty" />
      <div
        className={"slider__full" + (mouseDown ? " -hover" : "")}
        style={{ width: percent + "%" }}
      />
      <div
        className={"slider__knob" + (mouseDown ? " -hover" : "")}
        style={{ left: percent + "%" }}
      />
    </div>
  );
};

export default slider;
