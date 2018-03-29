import React, { Component } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { FileField } from '../../utils/form/form';
import { fileUpload } from './_actions/imageUploadActions';

class ImageUpload extends Component {
  upload(event) {
    const formData = new FormData();
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
    this.props.fileUpload(formData);

    console.log([...formData]);
  }

  render() {
    return (
      <form>
        <Field
          name="file"
          type="file"
          onChange={e => this.upload(e)}
          component={FileField}
          multiple={this.props.multiple}
        />
        --List--
      </form>
    );
  }
}

ImageUpload.defaultProps = {
  onUpload() {
    console.log('No upload action');
  },
  multiple: true,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fileUpload: formData => dispatch(fileUpload(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
