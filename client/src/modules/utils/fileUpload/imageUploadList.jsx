import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import Img from '../img/img';
import { fileDeleteById } from './_actions/imageUploadActions';

const DragHandle = SortableHandle(() => (
  <div>
    <div className="svg-icon hamburger w30 h30 mr-4" />
  </div>
));

const SortableItem = SortableElement(({ value, deletedItem }) => (
  <div className="d-flex align-items-center mb-2">
    <DragHandle />
    <Img pid={value.pid} h={50} className="border mr-4" />
    <div
      className="btn text-danger"
      onClick={() => deletedItem(value.pid)}
    >Delete
    </div>
  </div>
));

const SortableList = SortableContainer(({ items, deletedItem }) => (
  <div>
    {items.map((value, index) => (
      <SortableItem key={`${value.pid}`} index={index} value={value} deletedItem={deletedItem} />
    ))}
  </div>
));

class ImageUploadList extends Component {
  constructor(props) {
    super(props);
    this.onSortEnd = this.onSortEnd.bind(this);

    this.state = {
      images: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.images, this.props.images)) {
      this.setState({ images: nextProps.images });
    }
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      images: arrayMove(this.state.images, oldIndex, newIndex),
    });

    this.props.onChange(this.state.images);
  }

  render() {
    return (
      <div>
        <SortableList
          items={this.state.images || this.props.images || []}
          onSortEnd={this.onSortEnd}
          useDragHandle
          deletedItem={this.props.fileDeleteById}
        />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fileDeleteById: pid => dispatch(fileDeleteById(pid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadList);
