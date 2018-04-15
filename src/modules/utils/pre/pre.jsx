import React, { Component } from 'react';
import _ from 'lodash';

class Pre extends Component {
  render() {
    return (
      <div>
        { !this.props.off ?
          <pre>
            {JSON.stringify(_.get(this.props, 'obj', {}), 0, 2)}
          </pre>
          : null
        }
      </div>
    );
  }
}

Pre.defaultProps = {
  obj: {},
  off: false,
};

export default Pre;
