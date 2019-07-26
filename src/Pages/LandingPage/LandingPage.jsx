import React from "react";
import "./LandingPage.scss";
import Window from "../../components/Window/Window";
import IconContainer from "../../components/IconContainer/IconContainer";
import { DESKTOP } from "../../content";

const landingPage = () => {
  return (
    <div>
      {DESKTOP.map(window => (
        <Window
          key={window.id}
          id={window.id}
          width={window.width}
          height={window.height}
          posX={window.posX}
          posY={window.posY}
          title={window.windowTitle}
          type={window.type}
          content={window.content}
        />
      ))}
      <IconContainer direction="column" length={5} icons={DESKTOP} />
    </div>
  );
};

export default landingPage;
