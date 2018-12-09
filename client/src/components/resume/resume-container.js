import React, { Component } from 'react';
import Contact from './contact.js';
import Education from './education.js';
import Experience from './experience.js';
import Projects from './projects.js';
import Skills from './skills.js';
import ResumeWindow from './resume-window.js';

const demoSettings = {
  seniority: 'junior',
  job: 'engineering'
}
const demoSettings2 = {
  seniority: 'senior',
  job: 'engineering'
}

class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.profile = demoSettings2;
  }
  get isJunior() {
    if (this.profile.seniority === 'senior') {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div id="resume-container">
        {this.isJunior
          ? <ResumeWindow onClose={this.props.onClose}>
              <Contact json={this.props.json.contact}/>
              <Education json={this.props.json.education} />
              <Skills json={this.props.json.skills} />
              <Experience json={this.props.json.experience} />
              <Projects json={this.props.json.projects} />
            </ResumeWindow>
          : <ResumeWindow onClose={this.props.onClose}>
              <Contact json={this.props.json.contact} />
              <Skills json={this.props.json.skills} />          
              <Experience json={this.props.json.experience} />
              <Projects json={this.props.json.projects} />
              <Education json={this.props.json.education} />
            </ResumeWindow>
        }
      </div>
    );
  }
}

export default ResumeContainer;
