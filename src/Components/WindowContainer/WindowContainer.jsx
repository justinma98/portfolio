import React from "react";
import Window from "../Window/Window";
import "./WindowContainer.scss";

const windowContainer = props => {
  const { windows } = props;
  return (
    <div className="windowWrapper">
      {windows.map(window => (
        <Window key={window.id} {...window} />
      ))}
    </div>
  );
};

export default windowContainer;
