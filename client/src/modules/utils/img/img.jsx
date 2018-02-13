import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';

class Img extends Component {
  render() {
    return (
      <Image
        cloudName={this.props.url.split('/')[3]}
        publicId={this.props.pid}
        width={this.props.w}
        crop="scale"
      />
    );
  }
}

Img.defaultProps = {
  width: 300,
};

export default Img;
