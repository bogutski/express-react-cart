import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { userLogin } from './_actions/userActions';

class UserProfileView extends Component {
  render() {
    return (
      <div>

        {this.props.userInfo._id}
        <hr />
        {this.props.userInfo.email}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  // userLogin: (email, password) => dispatch(userLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView);
