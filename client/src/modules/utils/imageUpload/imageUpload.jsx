import React, { Component } from 'react';
import { Field } from 'redux-form';
import _ from 'lodash';
import { FileField } from '../../utils/form/form';

class ImageUpload extends Component {
  upload() {
    // const formData = new FormData();
    //
    // Object.keys(data)
    //   .forEach((el) => {
    //     formData.append(el, data[el]);
    //   });
    //
    // const countFiles = Object.keys(_.get(data, 'file', {})).length;
    // for (let i = 0; i < countFiles; i++) {
    //   formData.append('image', data.file[i]);
    // }
  }

  render() {
    return (
      <div>
        <Field
          name="file"
          type="file"
          onChange={() => this.props.onUpload(123)}
          component={FileField}
          multiple={this.props.multiple}
        />
        --List--
      </div>
    );
  }
}

ImageUpload.defaultProps = {
  onUpload() {
    console.log('No upload action');
  },
  multiple: true,
};

export default ImageUpload;
