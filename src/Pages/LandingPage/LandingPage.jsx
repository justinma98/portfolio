import React, { Component } from "react";
import "./LandingPage.scss";
import Window from "../../components/Window/Window";
import Icon from "../../components/Icon/Icon";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topZIndex: 1,
      windows: [
        {
          id: "test1",
          width: 400,
          height: 200,
          posX: 200,
          posY: 100,
          windowTitle: "New Window Title 1",
          iconTitle: "IconTitle1",
        },
        {
          id: "test2",
          width: 300,
          height: 250,
          posX: 250,
          posY: 150,
          windowTitle: "Window Title 2",
          iconTitle: "IconTitle2",
        },
        {
          id: "test3",
          width: 450,
          height: 300,
          posX: 300,
          posY: 200,
          windowTitle: "WWWWWWWWWW Title 3",
          iconTitle: "IconTitle3",
        },{
          id: "test4",
          width: 300,
          height: 200,
          posX: 150,
          posY: 250,
          windowTitle: "iiiiiiii Title 3",
          iconTitle: "IconTitle3",
        }
      ]
    };
  }

  selectWindow = zIndex => {
    let topZIndex = this.state.topZIndex;
    if (zIndex === topZIndex) return zIndex;
    this.setState({
      topZIndex: topZIndex + 1
    });
    return topZIndex + 1;
  };

  render() {
    return (
      <div>
        {this.state.windows.map(window => (
          <Window
            id={window.id}
            width={window.width}
            height={window.height}
            posX={window.posX}
            posY={window.posY}
            title={window.windowTitle}
            selectWindow={this.selectWindow}
          />
        ))}
        {this.state.windows.map(icon => (
          <Icon
            id={icon.id}
            title={icon.iconTitle}
            selectWindow={this.selectWindow}
          />
        ))}
      </div>
    );
  }
}

export default LandingPage;
