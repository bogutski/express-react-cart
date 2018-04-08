import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fileUpload } from './_actions/imageUploadActions';
import ImageUploadList from './imageUploadList';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };

    this.fileUploader = null;
    this.fileUploaderRef = (element) => {
      this.fileUploader = element;
    };
    this.clickFileUploader = () => {
      if (this.fileUploader) this.fileUploader.click();
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
        <button
          onClick={this.clickFileUploader}
          className="mb-2"
        >Upload files
        </button>

        <input
          type="file"
          id="file"
          ref={this.fileUploaderRef}
          style={{ display: 'none' }}
          onChange={e => this.upload(e)}
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
