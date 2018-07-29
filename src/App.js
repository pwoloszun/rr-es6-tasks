import React, { Component } from 'react';

import './App.css';
import esRunner from './es-tasks/es-runner';

esRunner();

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">rr-es6-tasks app</h1>
      </div>
    );
  }
}

export default App;
