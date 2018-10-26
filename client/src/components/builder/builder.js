import React, { Component } from 'react';
import QuestionsContainer from './questions-container.js';
import StartView from './start-view.js';
import ResultsView from './results-view.js';

class Builder extends Component {
  constructor() {
    super();

    this.elementsList = [];    
    this.state = {
      isStartOpen: true,
      isOptionsOpen: false,
      isQuestionnaireOpen: false,
      isResultsOpen: false,
    };

    this.scroll = this.scroll.bind(this);
    this.startToOptions = this.startToOptions.bind(this);
    this.optionsToQuestionnaire = this.optionsToQuestionnaire.bind(this);
    this.questionnaireToResults = this.questionnaireToResults.bind(this);
  }

  startToOptions() {
    this.setState(() => ({isStartOpen: false, isOptionsOpen: true }));
  }

  optionsToQuestionnaire() {
    this.elementsList = [];
    this.setState(() => ({isOptionsOpen: false, isQuestionnaireOpen: true }));
  }

  questionnaireToResults() {
    this.setState(() => ({isQuestionnaireOpen: false, isResultsOpen: true}));
  }

  scroll(index) {
    if (index < this.elementsList.length - 1) {
      this.elementsList[index + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (this.state.isOptionsOpen) {
      this.optionsToQuestionnaire();
      this.topDiv.scrollIntoView();      
    } else {
      this.questionnaireToResults();
    }
  }

  render() {
    return (
      <div id="Builder" style={{ paddingTop: '5%'}}>
        <div ref={el => (this.topDiv = el)} />
        {this.state.isStartOpen
          ? <StartView start={this.startToOptions} />
          : null
        }
        {this.state.isOptionsOpen
          ? <QuestionsContainer
              elementsList={this.elementsList}
              isQuestionnaire={false}
              scroll={this.scroll}
            />
          : null
        }
        {this.state.isQuestionnaireOpen
          ? <QuestionsContainer
              elementsList={this.elementsList}
              isQuestionnaire
              scroll={this.scroll}
            />
          : null
        }
        {this.state.isResultsOpen ? <ResultsView /> : null}
      </div>
    );
  }
}

export default Builder;
