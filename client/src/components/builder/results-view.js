import React, { Component } from 'react';
import ResumeContainer from '../resume/resume-container.js';
import json from '../../fixtures/sample-resume.json';

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
    return <div id="ResultsView">
        This is the results screen.
        <br />
        <button onClick={this.open}>
          Click to open resume.
        </button>
        {this.state.resumeIsOpen
          ? <ResumeContainer json={json} onClose={this.onClose} />
          : null
        }
      </div>;
  }
}

export default ResultsView;
