import React, { Component } from 'react';

class Pre extends Component {
  render() {
    return (
      <pre>
        {JSON.stringify(this.props.obj, 0, 2)}
      </pre>
    );
  }
}

export default Pre;
