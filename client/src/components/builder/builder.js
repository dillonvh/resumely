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
      isQuestionaireOpen: false,
      isResultsOpen: false,
    };

    this.scroll = this.scroll.bind(this);
    this.startToOptions = this.startToOptions.bind(this);
    this.optionsToQuestionaire = this.optionsToQuestionaire.bind(this);
    this.questionaireToResults = this.questionaireToResults.bind(this);
  }

  startToOptions() {
    this.setState(() => ({isStartOpen: false, isOptionsOpen: true }));
  }

  optionsToQuestionaire() {
    this.elementsList = [];
    this.setState(() => ({isOptionsOpen: false, isQuestionaireOpen: true }));
  }

  questionaireToResults() {
    this.setState(() => ({isQuestionaireOpen: false, isResultsOpen: true}));
  }

  scroll(index) {
    if (index < this.elementsList.length - 1) {
      this.elementsList[index + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (this.state.isOptionsOpen) {
      this.optionsToQuestionaire();
      this.topDiv.scrollIntoView();      
    } else {
      this.questionaireToResults();
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
              isQuestionaire={false}              
              scroll={this.scroll}
            />
          : null
        }
        {this.state.isQuestionaireOpen
          ? <QuestionsContainer
              elementsList={this.elementsList}
              isQuestionaire
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
