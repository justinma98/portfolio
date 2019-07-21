import React, { Component } from "react";
import "./LandingPage.scss";
import Window from "../../components/Window/Window";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topZIndex: 1
    };

    this.selectWindow = this.selectWindow.bind(this);
  }

  selectWindow(zIndex) {
    let topZIndex = this.state.topZIndex;
    if (zIndex === topZIndex) return zIndex;
    this.setState({
      topZIndex: topZIndex + 1
    });
    return topZIndex + 1;
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <Window selectWindow={this.selectWindow} />
        <Window selectWindow={this.selectWindow} />
      </div>
    );
  }
}

export default LandingPage;
