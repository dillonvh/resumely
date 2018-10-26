import React, { Component } from 'react';
import Header from './components/header.js';
import Builder from './components/builder/builder.js';
import InfoPanel from './components/info-panel.js';
import './App.css';

const panelStyle = {
  'position': 'fixed',
  'right': '2%',
  'top': '10%',
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAboutOpen: false,
      isContactOpen: false,
    };
    this.contentOptions = {
      about: "about",
      contact: "contact",
    }
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
  }

  toggleAbout() {
    this.setState((prevState) => ({
      isAboutOpen: !prevState.isAboutOpen,
      isContactOpen: false,
    }));
  }
  
  toggleContact() {
    this.setState((prevState) => ({
      isContactOpen: !prevState.isContactOpen,
      isAboutOpen: false,
    }));
  }

  render() {
    return (
      <div id="App">
        <Header
          toggleAbout={this.toggleAbout}
          toggleContact={this.toggleContact}
        />
        <div style={panelStyle}>
          {this.state.isAboutOpen
            ? <InfoPanel contentOptions={this.contentOptions.about} />
            : null
          }
          {this.state.isContactOpen
            ? <InfoPanel contentOptions={this.contentOptions.contact} />
            : null
          }        
        </div>
        <Builder />
      </div>
    );
  }
}

export default App;
