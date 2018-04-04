import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';

class Img extends Component {
  render() {
    // example url http://res.cloudinary.com/bogutskii/image/upload/v1518501376/mbyyt6hblk4uliwocs8u.png
    const url = this.props.url || '';
    const cloudName = url ? url.split('/')[3] : process.env.REACT_APP_CLOUDINARY_USER;
    const publicId = this.props.pid || url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));

    if (publicId) {
      return (
        <Image
          cloudName={cloudName}
          publicId={publicId}
          onClick={this.props.onClick}
          className={this.props.className}
        >
          <Transformation
            width={this.props.w}
            height={this.props.h}
            crop={this.props.crop}
            background={this.props.background}
          />
        </Image>
      );
    }
    return null;
  }
}

Img.defaultProps = {
  w: null,
  h: null,
  crop: 'fit',
  background: 'white',
};

export default Img;
