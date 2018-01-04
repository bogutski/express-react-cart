import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getUserById } from './_actions/userActions';

class UseShortInfo extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.userInfo)) {
      this.props.getUserById(localStorage.getItem('userId'));
    }
  }

  render() {
    return (
      <div>
        {this.props.userInfo.email}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  getUserById: userId => dispatch(getUserById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UseShortInfo);
