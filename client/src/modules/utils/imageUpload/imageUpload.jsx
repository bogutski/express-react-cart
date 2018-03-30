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

    this.props.fileUpload(formData)
      .then((res) => {
        console.log(res.data);
        this.props.onUpload(res.data);
      });
  }

  render() {
    return (
      <div>
        <Field
          name="file"
          type="file"
          onChange={e => this.upload(e)}
          component={FileField}
          multiple={this.props.multiple}
        />
        <ul>
          {this.props.initialFiles.map(el => <li>{el.pid}</li>)}
        </ul>
      </div>
    );
  }
}

ImageUpload.defaultProps = {
  onUpload() {
    console.log('No upload action');
    return null;
  },
  initialFiles: [],
  multiple: true,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fileUpload: formData => dispatch(fileUpload(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
