import React, { Component } from 'react';
// import './currentBreakpoint.scss';

class CurrentBreakpoint extends Component {
  render() {
    return (
      <div className="bootSizes">
        <div className="displaySize only-xs">XS</div>
        <div className="displaySize only-sm">SM</div>
        <div className="displaySize only-md">MD</div>
        <div className="displaySize only-lg">LG</div>
        <div className="displaySize only-xl">XL</div>
      </div>
    );
  }
}

export default CurrentBreakpoint;
