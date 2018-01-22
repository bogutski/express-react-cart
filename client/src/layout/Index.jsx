import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import _ from 'lodash';
import Header from './Header';
import Footer from './Footer';
import Alert from './../modules/alert/alert';
import UserRegisterForm from '../modules/user/userRegisterForm';
import UserLoginForm from '../modules/user/userLoginForm';
import UserList from './../modules/user/userList';
import Home from './../modules/home/home';
import Catalog from './../modules/catalog/catalogIndex';
import ProductList from '../modules/product/productList';
import ProductForm from './../modules/product/productForm';
import ProductView from './../modules/product/view/productView';
import { userGetById } from '../modules/user/_actions/userActions';
import Vocabular from '../modules/vocabular/vocabularIndex';
import VocabularForm from '../modules/vocabular/form/vocabularForm';
import { vocabularFillCatalog } from './../modules/vocabular/_actions/vocabularActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (_.isEmpty(this.props.userInfo) && !_.isEmpty(localStorage.getItem('userId'))) {
      this.props.userGetById(localStorage.getItem('userId'));
    }

    if (_.isEmpty(this.props.catalog)) {
      this.props.vocabularFillCatalog();
    }
  }

  render() {
    return (
      <Container>
        <Alert />
        <Row>

          <Header />

          <Col>
            <div className="content">
              <div className="col">
                <Switch>
                  <Route exact path="/" component={Home} />

                  {
                    (_.has(this.props.router, 'state.component')
                    && this.props.router.state.component === 'catalog'
                    ) && <Route component={Catalog} />
                  }

                  <Route exact path="/vocabular" component={Vocabular} />
                  <Route exact path="/vocabular/add" component={VocabularForm} />
                  <Route exact path="/vocabular/edit/:id" component={VocabularForm} />

                  <Route exact path="/product/list" component={ProductList} />
                  <Route exact path="/product/:id" component={ProductView} />
                  <Route exact path="/product/add" component={ProductForm} />
                  <Route exact path="/product/edit/:id" component={ProductForm} />

                  <Route exact path="/user/list" component={UserList} />
                  <Route exact path="/user/login" component={UserLoginForm} />
                  <Route exact path="/user/register" component={UserRegisterForm} />

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

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
  catalog: state.vocabular.catalog,
  router: state.router.location,
});

const mapDispatchToProps = dispatch => ({
  userGetById: userId => dispatch(userGetById(userId)),
  vocabularFillCatalog: () => dispatch(vocabularFillCatalog()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
