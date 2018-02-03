import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import VocabularControl from './vocabularControls';
import VocabularList from './vocabularList';

class Vocabular extends Component {
  render() {
    return (
      <div>

        <Helmet>
          <title>Vocabulars</title>
        </Helmet>

        <h5>Vocabulars</h5>
        <VocabularControl />
        <VocabularList />
      </div>
    );
  }
}

export default Vocabular;
