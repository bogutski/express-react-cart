import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UserRegisterForm from './../modules/user/registerForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12">
            <Header />
          </Col>

          <Col>
            <div className="content">
              <div className="col">
                <UserRegisterForm />
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
