import React, { Component } from 'react';
import './App.css';

import NoteHolder from './Components/noteholder'
import Note from './Components/note'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>"Let's Take Some Notes"</h1>
          <div><NoteHolder /></div>
          <div><Note /></div>
      </div>
    );
  }
}

export default App;
