import React, { Component } from 'react';
import Header from './components/header.js';
import Builder from './components/builder/builder.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Builder />
      </div>
    );
  }
}

export default App;
