import React, { Component } from 'react';

class Pre extends Component {
  render() {
    return (
      <div>
        { this.props.on ?
          <pre>
            {JSON.stringify(this.props.obj, 0, 2)}
          </pre>
          : null
        }
      </div>
    );
  }
}

Pre.defaultProps = {
  obj: {},
  on: false,
};

export default Pre;
