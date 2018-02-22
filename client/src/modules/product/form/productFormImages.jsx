import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import Img from '../../utils/img/img';

const DragHandle = SortableHandle(() => <div className="svg-icon hamburger w30 h30 mr-4" />);

const SortableItem = SortableElement(({ value }) => (
  <div className="d-flex align-items-center mb-2">
    <DragHandle />
    <Img pid={value.pid} h={50} className="border mr-4" />
    <input type="text" placeholder="Title" className="mr-4"/>
    <div className="btn btn-danger btn-sm">Delete</div>
  </div>
));

const SortableList = SortableContainer(({ items }) => (
  <div>
    {items.map((value, index) => (
      <SortableItem key={`${value.pid}`} index={index} value={value} />
    ))}
  </div>
));

class ProductFormImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  }

  render() {
    return (
      <SortableList
        items={_.get(this.props, 'productForm.values.image', [])}
        onSortEnd={() => this.onSortEnd}
        useDragHandle
      />
    );
  }
}

const mapStateToProps = state => ({
  productForm: state.form.product,
});

const mapDispatchToProps = dispatch => ({
  // productGetById: productId => dispatch(productGetById(productId)),
  // productCreate: product => dispatch(productCreate(product)),
  // productUpdate: (productId, data) => dispatch(productUpdate(productId, data)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(ProductFormImages);
