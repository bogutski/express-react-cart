import React, { Component } from 'react';
import VocabularControl from './vocabularControls';
import VocabularList from './vocabularList';

class Vocabular extends Component {
  render() {
    return (
      <div>
        <VocabularControl />
        <VocabularList />
      </div>
    );
  }
}

export default Vocabular;
