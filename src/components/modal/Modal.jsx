import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    const { src } = this.props;
    return (
      <div>
        <img alt="large" src={src} />
      </div>
    );
  }
}