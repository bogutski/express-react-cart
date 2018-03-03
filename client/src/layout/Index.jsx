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
import ShippingPage from '../modules/user/shipping/shippingPage';
import Home from './../modules/home/home';
import Catalog from './../modules/catalog/catalogIndex';
import ProductList from '../modules/product/productList';
import ProductForm from '../modules/product/form/productForm';
import ProductView from './../modules/product/view/productView';
import CheckoutPage from './../modules/checkout/checkoutPage';
import { userGetById } from '../modules/user/_actions/userActions';
import Vocabular from '../modules/vocabular/vocabularIndex';
import VocabularForm from '../modules/vocabular/form/vocabularForm';
import { vocabularFillCatalog } from './../modules/vocabular/_actions/vocabularActions';
import { productsGet } from './../modules/product/_actions/productActions';
import { cartFill } from './../modules/cart/_actions/cartActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Fill cart from localStorage after reload page
    const localCart = localStorage.getItem('cart');
    if (!_.isEmpty(localCart)) {
      this.props.cartFill(JSON.parse(localCart));
    }

    // Strategy small store: list of all products will be loaded on first load page
    this.props.productsGet();

    // After refresh login for current user
    if (_.isEmpty(this.props.userInfo) && !_.isEmpty(localStorage.getItem('userId'))) {
      this.props.userGetById(localStorage.getItem('userId'));
    }

    if (_.isEmpty(this.props.catalog)) {
      this.props.vocabularFillCatalog();
    }
  }

  componentWillUpdate(nextProps) {
    // Check for changes in cart. If tue save cart to localStorage
    if (
      nextProps.cart.totalCount &&
      this.props.cart.totalCount !== nextProps.cart.totalCount
    ) {
      localStorage.setItem('cart', JSON.stringify(nextProps.cart));
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
                <Route exact path="/user/shipping/:userId" component={ShippingPage} />

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
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  userGetById: userId => dispatch(userGetById(userId)),
  vocabularFillCatalog: () => dispatch(vocabularFillCatalog()),
  cartFill: cart => dispatch(cartFill(cart)),
  productsGet: () => dispatch(productsGet()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
