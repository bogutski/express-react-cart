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

        <div className="d-block">
          <Img
            className="border"
            pid={this.state.mainImagePid || this.props.image[0].pid}
            h={400}
          />
        </div>

        <div className="d-block mt-4">
          {
            this.props.image.map((el, i) =>
              (<Img
                key={el.pid}
                pid={el.pid}
                h={100}
                onClick={() => this.clickOnThumb(el.pid)}
                className={[
                  'mr-2 mb-2',
                  'border',
                  !this.state.mainImagePid && i === 0 && 'border-dark',
                  el.pid === this.state.mainImagePid && 'border-dark',
                ].join(' ')}
              />))
          }
        </div>

      </div>
    );
  }
}

export default ProductViewImage;
