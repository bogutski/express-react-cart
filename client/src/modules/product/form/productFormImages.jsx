import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import Img from '../../utils/img/img';
import { rerangeImages } from '../_actions/productActions';

const DragHandle = SortableHandle(() => <div className="svg-icon hamburger w30 h30 mr-4" />);

const SortableItem = SortableElement(({ value }) => (
  <div className="d-flex align-items-center mb-2">
    <DragHandle />
    <Img pid={value.pid} h={50} className="border mr-4" />
    <input type="text" placeholder="Title" className="mr-4" />
    <div className="btn text-danger" >Delete</div>
  </div>
));

const SortableList = SortableContainer(({ items }) => (
  <div className="mt-4">
    {items.map((value, index) => (
      <SortableItem key={`${value.pid}`} index={index} value={value} />
    ))}
  </div>
));

class ProductFormImages extends Component {
  constructor(props) {
    super(props);
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    const rerangedImages = arrayMove(this.props.productForm.values.image, oldIndex, newIndex);
    this.props.rerangeImages(rerangedImages);
  }

  render() {
    return (
      <SortableList
        items={_.get(this.props, 'productForm.values.image', [])}
        onSortEnd={this.onSortEnd}
        useDragHandle
      />
    );
  }
}

const mapStateToProps = state => ({
  productForm: state.form.product,
});

const mapDispatchToProps = dispatch => ({
  rerangeImages: images => dispatch(rerangeImages(images)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(ProductFormImages);
