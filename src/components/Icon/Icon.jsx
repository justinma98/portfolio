import React, { Component } from "react";
import "./Icon.scss";

export default class Window extends Component {
  constructor(props) {
    super(props);

    this.state = {
      last_t: 0
    };
  }

  handleClick = () => {
    let curr_t = Date.now();
    if (curr_t - this.state.last_t < 500) {
      let window = document.getElementById(this.props.id).style;
      let zIndex = window.zIndex
      window.zIndex = this.props.selectWindow(zIndex);
      window.display = null;
    }
    this.setState({
      last_t: curr_t
    });
  };

  render() {
    let { title } = this.props;
    return (
      <div className="icon" onClick={this.handleClick}>
        <div className="icon__thumbnail" />
        <div className="icon__title">{title}</div>
      </div>
    );
  }
}
