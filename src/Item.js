import React, { Component } from 'react';
import { prefixed } from 'eventemitter3';

class Preview extends Component {
  render() {
    return <div className="item">{this.props.item.name}</div>;
  }
}

export default Preview;
