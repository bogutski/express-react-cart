import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { FileField, Selectbox, TextField } from '../../utils/form/form';
import { number, required } from '../../utils/form/validators';
import { productCreate, productGetById, productUpdate } from '../_actions/productActions';
import Pre from '../../utils/pre/pre';
import ProductFormImages from './productFormImages';

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
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <h1>Product</h1>

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

        <ProductFormImages />

        <hr />
        <Field name="file" type="file" component={FileField} multiple />
        <hr />

        <Button
          type="submit"
          color="primary"
          disabled={this.props.productForm && {}.hasOwnProperty.call(this.props.productForm, 'syncErrors')}
        >Save
        </Button>

        <Pre obj={_.get(this.props, 'productForm.values', {})} />

      </Form>
    );
  }
}

const mapStateToProps = state => ({
  productForm: state.form.product,
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
