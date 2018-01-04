import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import UserRegisterForm from '../modules/user/userRegisterForm';
import UserLoginForm from '../modules/user/userLoginForm';
import Alert from './../modules/alert/alert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Alert />
        <Row>
          <Col sm="12">
            <Header />
          </Col>

          <Col>
            <div className="content">
              <div className="col">
                <Switch>
                  <Route exact path="/user/register" component={UserRegisterForm} />
                  <Route path="/user/login" component={UserLoginForm} />
                </Switch>
              </div>
            </div>
          </Col>

        </Row>

        <Footer />

      </Container>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));
