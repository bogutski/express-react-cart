import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="pt-5 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md">
              <img
                className="mb-2"
                src="favicon.png"
                alt=""
                width="48"
                height="48"
              />
              <small className="d-block mb-3 text-muted">© 2017-2018</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li><span className="text-muted">Cool stuff</span></li>
                <li><span className="text-muted">Random feature</span></li>
                <li><span className="text-muted">Team feature</span></li>
                <li><span className="text-muted">Stuff for developers</span></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li><span className="text-muted">Resource</span></li>
                <li><span className="text-muted">Resource name</span></li>
                <li><span className="text-muted">Another resource</span></li>
                <li><span className="text-muted">Final resource</span></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><span className="text-muted">Team</span></li>
                <li><span className="text-muted">Locations</span></li>
                <li><span className="text-muted">Privacy</span></li>
                <li><span className="text-muted">Terms</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
