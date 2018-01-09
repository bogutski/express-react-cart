import React, { Component } from 'react';
import VocabularCreateForm from './form/vocabularCreateForm';
import VocabularList from './vocabularList';

class Vocabular extends Component {
  render() {
    return (
      <div>
        <VocabularCreateForm />
        <VocabularList />
      </div>
    );
  }
}

export default Vocabular;
