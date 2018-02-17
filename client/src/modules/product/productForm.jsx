import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { FileField, Selectbox, TextField } from '../utils/form/form';
import { number, required } from '../utils/form/validators';
import { productCreate, productGetById, productUpdate } from './_actions/productActions';

// const customFileInput = (field) => {
//   delete field.input.value; // <-- just delete the value property
//   return <input type="file" id="file" {...field.input} />;
// };

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
    formData.append('name', '123');
    formData.append('price', 123);
    formData.append('image', data.file[0]);
    formData.append('image', data.file[1]);

    if (productId) {
      this.props.productUpdate(productId, data);
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

        <Field name="file" type="file" component={FileField} multiple />

        <Button
          type="submit"
          color="primary"
          disabled={this.props.productForm && {}.hasOwnProperty.call(this.props.productForm, 'syncErrors')}
        >Save
        </Button>
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
