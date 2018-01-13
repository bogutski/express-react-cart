import React, { Component } from 'react';
import VocabularControl from './vocabularControls';
import VocabularList from './vocabularList';

class Vocabular extends Component {
  render() {
    return (
      <div>
        <h5>Vocabulars</h5>
        <VocabularControl />
        <VocabularList />
      </div>
    );
  }
}

export default Vocabular;
