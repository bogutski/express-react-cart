import React, { Component } from 'react';
import Img from './../../utils/img/img';

class ProductViewImage extends Component {
  render() {
    return (
      <div>
        <Img pid={this.props.image[0].pid} />

        <hr />

        {
          this.props.image.map((el, i) => {
            if (i > 0) {
              return <Img key={el.pid} pid={el.pid} w={100} />;
            }
            return null;
          })
        }

      </div>
    );
  }
}

export default ProductViewImage;
