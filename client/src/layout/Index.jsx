import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import Header from './Header';
import Footer from './Footer';
import Alert from '../modules/utils/alert/alert';
import UserRegisterForm from '../modules/user/userRegisterForm';
import UserLoginForm from '../modules/user/userLoginForm';
import UserList from './../modules/user/userList';
import UserProfile from '../modules/user/profile/userProfile';
import Home from './../modules/home/home';
import Catalog from './../modules/catalog/catalogIndex';
import ProductList from '../modules/product/productList';
import ProductForm from './../modules/product/productForm';
import ProductView from './../modules/product/view/productView';
import CheckoutPage from './../modules/checkout/checkoutPage';
import { userGetById } from '../modules/user/_actions/userActions';
import Vocabular from '../modules/vocabular/vocabularIndex';
import VocabularForm from '../modules/vocabular/form/vocabularForm';
import { vocabularFillCatalog } from './../modules/vocabular/_actions/vocabularActions';
import { productGetAll } from './../modules/product/_actions/productActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // After refresh login for current user
    if (_.isEmpty(this.props.userInfo) && !_.isEmpty(localStorage.getItem('userId'))) {
      this.props.userGetById(localStorage.getItem('userId'));
    }

    if (_.isEmpty(this.props.catalog)) {
      this.props.vocabularFillCatalog();
    }

    // Strategy small store: list of all products will be loaded on first load page
    if (_.isEmpty(this.props.productList)) {
      this.props.productGetAll();
    }
  }

  component() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>ER cart</title>
        </Helmet>

        <Alert />

        <Header />

        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/catalog" component={Catalog} />
                <Route exact path="/catalog/:level" component={Catalog} />
                <Route exact path="/catalog/:level/:sublevel" component={Catalog} />
                <Route exact path="/catalog/:level/:sublevel/:product" component={ProductView} />

                <Route exact path="/vocabular" component={Vocabular} />
                <Route exact path="/vocabular/add" component={VocabularForm} />
                <Route exact path="/vocabular/edit/:id" component={VocabularForm} />

                <Route exact path="/product/list" component={ProductList} />
                <Route exact path="/product/add" component={ProductForm} />
                <Route exact path="/product/:id" component={ProductView} />
                <Route exact path="/product/edit/:id" component={ProductForm} />

                <Route exact path="/checkout" component={CheckoutPage} />

                <Route exact path="/user/list" component={UserList} />
                <Route exact path="/user/login" component={UserLoginForm} />
                <Route exact path="/user/register" component={UserRegisterForm} />
                <Route exact path="/user/:userId" component={UserProfile} />

              </Switch>
            </Col>

          </Row>

          <Footer />

        </Container>
      </div>
    );
  }

  render() {
    return (
      _.isEmpty(this.props.productList) || _.isEmpty(this.props.catalog)
        ? <span>... Loading</span>
        : this.component()
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
  catalog: state.vocabular.catalog,
  productList: state.product.productList,
  router: state.router.location,
});

const mapDispatchToProps = dispatch => ({
  userGetById: userId => dispatch(userGetById(userId)),
  vocabularFillCatalog: () => dispatch(vocabularFillCatalog()),
  productGetAll: () => dispatch(productGetAll()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
