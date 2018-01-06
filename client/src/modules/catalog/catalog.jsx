import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Catalog extends Component {
  render() {
    return (
      <div>
        Catalog
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  // getUserById: userId => dispatch(getUserById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Catalog));
