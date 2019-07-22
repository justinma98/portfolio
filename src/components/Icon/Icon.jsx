import React, { Component } from "react";
import "./Icon.scss";

export default class Window extends Component {
  static defaultProps = {

  };

  constructor(props) {
    super(props);

    this.state = {
      last_t: 0,
      window: {
        width: 320,
        height: 320,
        title: "A Brand New Window"
      }
    };
  }

  handleClick = () => {
    let curr_t = Date.now();
    if (curr_t - this.state.last_t < 500) {
      document.getElementById("test").style.display = null;
    }
    this.setState({
      last_t: curr_t
    });
  }

  render() {
    return (
      <div className="icon" onClick={this.handleClick}>
        <div className="icon__thumbnail"/>
        <div className="icon__title">
          Folder Name
        </div>
      </div>
    )
  }
}