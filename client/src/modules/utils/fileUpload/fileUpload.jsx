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
      filelist: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.initialFiles)) {
      this.setState({ filelist: nextProps.filelist });
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
        console.log(res.data);
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
          images={this.state.filelist}
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
  initialFiles: [],
  multiple: true,
  view: 'images',
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fileUpload: formData => dispatch(fileUpload(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
