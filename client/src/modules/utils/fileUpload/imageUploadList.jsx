import React, { Component } from 'react';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import Img from '../img/img';

const DragHandle = SortableHandle(() => (
  <div>
    <div className="svg-icon hamburger w30 h30 mr-4" />
  </div>
));

const SortableItem = SortableElement(({ value }) => (
  <div className="d-flex align-items-center mb-2">
    <DragHandle />
    <Img pid={value.pid} h={50} className="border mr-4" />
    <div className="btn text-danger">Delete</div>
  </div>
));

const SortableList = SortableContainer(({ items }) => (
  <div>
    {items.map((value, index) => (
      <SortableItem key={`${value.pid}`} index={index} value={value} />
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
    if (nextProps.images !== this.props.images) {
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
          items={this.state.images}
          onSortEnd={this.onSortEnd}
          useDragHandle
        />
      </div>
    );
  }
}

export default ImageUploadList;
