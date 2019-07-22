import React, { Component } from "react";
import "./LandingPage.scss";
import Window from "../../components/Window/Window";
import Icon from "../../components/Icon/Icon";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topZIndex: 1,
      windows: [<Window selectWindow={this.selectWindow}/>]
    };
  }

  selectWindow = (zIndex) => {
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
        {this.state.windows}
        <Icon open={this.openWindow} />
      </div>
    );
  }
}

export default LandingPage;
