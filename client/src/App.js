import React, { Component } from 'react';
import Header from './components/header.js';
import Builder from './components/builder/builder.js';
import AboutPanel from './components/about-panel.js';
import ContactPanel from './components/contact-panel.js';
import './App.css';

const panelStyle = {
  'position': 'fixed',
  'top': '10%',
  'right': '2%',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAboutOpen: false,
      isContactOpen: false,
    };
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
  }

  toggleAbout() {
    this.setState((prevState) => ({ isAboutOpen: !prevState.isAboutOpen, isContactOpen: false }));
  }
  
  toggleContact() {
    this.setState((prevState) => ({ isContactOpen: !prevState.isContactOpen, isAboutOpen: false }));
  }

  render() {
    return (
      <div className="App">
        <Header toggleAbout={this.toggleAbout} toggleContact={this.toggleContact} />
        <div style={panelStyle}>
          {this.state.isAboutOpen ? <AboutPanel /> : null}
          {this.state.isContactOpen ? <ContactPanel /> : null}        
        </div>
        <Builder />
      </div>
    );
  }
}

export default App;
