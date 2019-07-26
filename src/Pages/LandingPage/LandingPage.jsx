import React, { Component } from "react";
import "./LandingPage.scss";
import Window from "../../components/Window/Window";
import IconContainer from "../../components/IconContainer/IconContainer";
import { DESKTOP } from "../../content";
console.log(DESKTOP);
class LandingPage extends Component {
  
  render() {
    return (
      <div>
        {DESKTOP.map(window => (
          <Window
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
        <IconContainer
          direction="column"
          length={3}
          icons={DESKTOP}
        />
      </div>
    );
  }
}

export default LandingPage;
