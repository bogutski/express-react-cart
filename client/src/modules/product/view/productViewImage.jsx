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
    console.log(this.state.mainImagePid);
    return (
      <div>

        <div className="d-block">
          <Img
            pid={this.state.mainImagePid || this.props.image[0].pid}
            h={400}
          />
        </div>

        <div className="d-block mt-4">
          {
            this.props.image.map((el, i) => {
              if (i > 0) {
                return (
                  <Img
                    key={el.pid}
                    pid={el.pid}
                    h={100}
                    onClick={() => this.clickOnThumb(el.pid)}
                    className={[
                      'mr-2 mb-2',
                      el.pid === this.state.mainImagePid && 'border border-dark',
                    ].join(' ')}
                  />);
              }
              return null;
            })
          }
        </div>

      </div>
    );
  }
}

export default ProductViewImage;
