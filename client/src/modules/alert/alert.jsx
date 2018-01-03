import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

class Alert extends Component {
  render() {
    const { notifications } = this.props;

    return (
      <Notifications
        notifications={notifications}
      />
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps)(Alert);
