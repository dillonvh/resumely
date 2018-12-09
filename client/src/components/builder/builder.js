import React, { Component } from 'react';
import QuestionsContainer from './questions-container.js';
import StartView from './start-view.js';
import ResultsView from './results-view.js';
import JobPostingInput from './job-posting-input.js';

const NUM_SCREENS = 3;

class Builder extends Component {
  constructor() {
    super();

    this.elementsList = [];

    this.screenCount = 0;
    this.switchScreen = this.switchScreen.bind(this);
    this.scroll = this.scroll.bind(this);
    this.updateElementsList = this.updateElementsList.bind(this);    
    
    this.screenComponents = [
      <StartView start={this.switchScreen}/>,
      <QuestionsContainer
        isQuestionnaire={false}
        scroll={this.scroll}
        updateElementsList={this.updateElementsList}        
      />,
      <JobPostingInput end={this.switchScreen}/>,
      <QuestionsContainer
        isQuestionnaire
        scroll={this.scroll}
        updateElementsList={this.updateElementsList}        
      />,
      <ResultsView />,
    ];

    this.state = {
      screenComponent: this.screenComponents[0],
    };
  }

  switchScreen() {
    if (this.screenCount > NUM_SCREENS) return;
    ++this.screenCount;
    this.setState(() => ({
      screenComponent: this.screenComponents[this.screenCount],
    }));
  }

  scroll(index) {
    if (index < this.elementsList.length - 1) {
      this.elementsList[index + 1].scrollIntoView({ behavior: 'smooth' });
    } else {
      this.switchScreen();
    }
  }

  updateElementsList(elements) {
    this.elementsList = elements;
  }

  render() {
    return (
      <div id="Builder" style={{ paddingTop: '5%', fontSize: '1.5em'}}>
        <br />
        <br />
        <br />
        <br />
        <div ref={el => (this.topDiv = el)} />
        {this.state.screenComponent}
      </div>
    );
  }
}

export default Builder;
