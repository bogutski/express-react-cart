import React, { Component } from 'react';
import { connect } from 'react-redux';

class Warning extends Component {
  render() {
    return (
      <ul>
        {this.props.warnings.map(el => (
          <li><h2>{el}</h2></li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  warnings: state.warning.warnings,
});

export default connect(mapStateToProps)(Warning);
