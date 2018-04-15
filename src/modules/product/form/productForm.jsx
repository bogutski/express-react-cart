import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { Redirect } from 'react-router';
import { FileField, Selectbox, TextField } from '../../utils/form/form';
import { number, required } from '../../utils/form/validators';
import { productCreate, productGetById, productUpdate } from '../_actions/productActions';
import ProductFormImages from './productFormImages';
import Pre from '../../utils/pre/pre';
import Tabs from '../../utils/tabs/tabs';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    if (productId) {
      this.props.productGetById(productId);
    }
  }

  formSubmit(e) {
    e.preventDefault();

    const productId = this.props.match.params.id;
    const data = {
      ...this.props.productForm.values,
    };

    const formData = new FormData();

    Object.keys(data)
      .forEach((el) => {
        formData.append(el, data[el]);
      });

    const countFiles = Object.keys(_.get(data, 'file', {})).length;
    for (let i = 0; i < countFiles; i++) {
      formData.append('image', data.file[i]);
    }

    formData.append('existingImage', JSON.stringify(data.image));

    if (productId) {
      this.props.productUpdate(productId, formData);
    } else {
      this.props.productCreate(formData);
    }

    // this.props.history.push(`/product/${productId}`);
  }

  render() {
    console.log(this.props.productForm);
    return (
      <div>
        <h1>{_.get(this.props, 'productForm.values.name', 'Product')}</h1>
        <Tabs
          tabs={[
            {
              name: 'view',
              label: 'View',
              content: <Redirect to={`/product/${this.props.productInfo._id}`} />,
            },
            {
              name: 'edit',
              label: 'Edit',
              default: true,
            },
          ]}
        />

        <Form onSubmit={this.formSubmit}>
          <Row>
            <Col xs="12" lg="6">
              <Field
                name="name"
                type="text"
                placeholder="Product name"
                component={TextField}
                validate={[required]}
              />

              <Field
                name="price"
                type="text"
                placeholder="Price"
                component={TextField}
                validate={[required, number]}
              />

              <Field
                name="catalog"
                options={this.props.categoryList}
                component={Selectbox}
              />

            </Col>

            <Col xs="12" lg="6" className="mt-4 mt-lg-0">

              <ProductFormImages />

              <hr />
              <Field name="file" type="file" component={FileField} multiple />
              <hr />
            </Col>

            <Col xl="12">
              <Button
                type="submit"
                color="primary"
                disabled={this.props.productForm && {}.hasOwnProperty.call(this.props.productForm, 'syncErrors')}
              >Save
              </Button>

              <Pre obj={_.get(this.props, 'productForm.values', {})} off />
            </Col>

          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productForm: state.form.product,
  productInfo: state.product.productInfo,
  categoryList: state.vocabular.categoryList,
});

const mapDispatchToProps = dispatch => ({
  productGetById: productId => dispatch(productGetById(productId)),
  productCreate: product => dispatch(productCreate(product)),
  productUpdate: (productId, data) => dispatch(productUpdate(productId, data)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'product' }),
)(ProductForm);
