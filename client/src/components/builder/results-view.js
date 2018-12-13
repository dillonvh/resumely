import React, { Component } from 'react';
import ResumeContainer from '../resume/resume-container.js';
import json from '../../fixtures/sample-resume.json';

const buttonStyling = {
  backgroundColor:'#E6F9AF', 
  color: '#0D0630', 
  borderStyle: 'none',
  borderRadius: '10%',
  outline: 'none',
  cursor: 'pointer',
}

class ResultsView extends Component {
  constructor() {
    super();
    this.state = {
      resumeIsOpen: false,
    }
    this.open = this.open.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  open() {
    this.setState(() => ({
      resumeIsOpen: true,
    }));
  }
  onClose() {
    this.setState(() => ({
      resumeIsOpen: false,
    }));
  }
  render() {
    return (
      <div id="ResultsView" style={{ height: '40rem' }}>
        This is the results screen.
        <br />
        <button onClick={this.open} style={buttonStyling}>
          Open resume
        </button>
        {this.state.resumeIsOpen
          ? <ResumeContainer json={json} onClose={this.onClose} />
          : null
        }
      </div>
    );
  }
}

export default ResultsView;
