import React from "react";
import "./Toolbar.scss";

const toolbar = props => {
  return (
    <div className="toolbar">
      <div className="toolbar__button -back" />
      <div className="toolbar__button -forward" />
      <div className="toolbar__button -refresh" />
      <div className="toolbar__search">
        <div className="toolbar__url" contentEditable spellCheck="false">{props.url}</div>
      </div>
    </div>
  );
};

export default toolbar;
