import React, { Component } from 'react';
import { Field } from 'redux-form';
import { FileField } from '../../utils/form/form';

class ImageUpload extends Component {
  render() {
    const { notifications } = this.props;

    return (
      <div>

        <Field
          name="file"
          type="file"
          onChange={() => console.log('CH')}
          component={FileField}
          multiple
        />

      </div>
    );
  }
}


export default ImageUpload;
