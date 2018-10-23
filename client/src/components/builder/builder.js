import React, { Component } from 'react';
import QuestionsContainer from './questions-container.js';
import StartView from './start-view.js';
import ResultsView from './results-view.js';

class Builder extends Component {
  constructor() {
    super();

    this.state = {
      hasStarted: false,
      hasEnded: false,
    };

    this.endQuestionaire = this.endQuestionaire.bind(this);
    this.startQuestionaire = this.startQuestionaire.bind(this);
  }

  startQuestionaire() {
    this.setState(() => ({hasStarted: true}));
  }

  endQuestionaire() {
    this.setState(() => ({hasEnded: true}));    
  }

  render() {
    return (
      <div id="Builder" style={{ paddingTop: '5%'}}>
        {this.state.hasStarted ? null : <StartView start={this.startQuestionaire}/>}
        {this.state.hasStarted && !this.state.hasEnded ? <QuestionsContainer endQuestionaire={this.endQuestionaire} /> : null}
        {this.state.hasEnded ? <ResultsView /> : null}
      </div>
    );
  }
}

export default Builder;
