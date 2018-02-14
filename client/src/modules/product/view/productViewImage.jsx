import React, { Component } from 'react';
import Img from './../../utils/img/img';

class ProductViewImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImagePid: '',
    };
  }

  clickOnThumb(pid) {
    this.setState({ mainImagePid: pid });
  }

  render() {
    return (
      <div>

        <Img pid={this.state.mainImagePid ? this.state.mainImagePid : this.props.image[0].pid} />

        <hr />

        {
          this.props.image.map((el, i) => {
            if (i > 0) {
              return (<Img
                key={el.pid}
                pid={el.pid}
                w={100}
                onClick={() => this.clickOnThumb(el.pid)}
              />);
            }
            return null;
          })
        }

      </div>
    );
  }
}

export default ProductViewImage;
