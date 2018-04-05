import React, { Component } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FileField } from '../../utils/form/form';
import { fileUpload } from './_actions/imageUploadActions';
import ImageUploadList from './imageUploadList';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.files)) {
      this.setState({ files: nextProps.files });
    }
  }

  onChange(v) {
    this.props.onUpload(v);
  }

  upload(event) {
    const formData = new FormData();
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    this.props.fileUpload(formData)
      .then((res) => {
        this.props.onUpload(res.data);
        this.setState({ files: res.data });
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

        {this.props.view === 'images' &&
        <ImageUploadList
          onChange={v => this.onChange(v)}
          images={this.state.files}
        />}
      </div>
    );
  }
}

FileUpload.defaultProps = {
  onUpload() {
    console.log('No upload action');
    return null;
  },
  onChange() {
    console.log('No onChange action');
    return null;
  },
  files: [],
  multiple: true,
  view: 'images',
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fileUpload: formData => dispatch(fileUpload(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
