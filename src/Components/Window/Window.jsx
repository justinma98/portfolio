import React, { Component } from 'react';
import './Window.scss';

export default class Window extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      width: 400,
      height: 200
    };
  }

  render() {
    return (
      <div className="window_wrapper" style={{width:this.state.width, height:this.state.height}}>
        hello
      </div>
    );
  }
}