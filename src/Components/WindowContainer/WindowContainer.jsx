import React from "react";
import Window from "../Window/Window";

const windowContainer = props => {
  const { windows } = props;
  return (
    <div className="windowWrapper">
      {windows.map(window => (
        <Window
          key={window.id}
          id={window.id}
          size={window.size}
          pos={window.pos}
          title={window.windowTitle}
          type={window.type}
          content={window.content}
        />
      ))}
    </div>
  );
};

export default windowContainer;
