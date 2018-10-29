import React, { Component } from 'react';
import QuestionsContainer from './questions-container.js';
import StartView from './start-view.js';
import ResultsView from './results-view.js';
import JobPostingInput from './job-posting-input.js';

class Builder extends Component {
  constructor() {
    super();

    this.elementsList = [];    
    this.state = {
      isStartOpen: true,
      isOptionsOpen: false,
      isJobPostingOpen: false,      
      isQuestionnaireOpen: false,
      isResultsOpen: false,
    };

    this.scroll = this.scroll.bind(this);
    this.startToOptions = this.startToOptions.bind(this);
    this.optionsToJobPosting = this.optionsToJobPosting.bind(this);
    this.jobPostingToQuestionnaire = this.jobPostingToQuestionnaire.bind(this);
    this.questionnaireToResults = this.questionnaireToResults.bind(this);
  }

  startToOptions() {
    this.setState(() => ({isStartOpen: false, isOptionsOpen: true }));
  }

  optionsToJobPosting() {
    this.elementsList = [];
    this.setState(() => ({isOptionsOpen: false, isJobPostingOpen: true }));
  }

  jobPostingToQuestionnaire() {
    this.elementsList = [];
    this.setState(() => ({isJobPostingOpen: false, isQuestionnaireOpen: true }));
  }

  questionnaireToResults() {
    this.setState(() => ({isQuestionnaireOpen: false, isResultsOpen: true}));
  }

  scroll(index) {
    if (index < this.elementsList.length - 1) {
      this.elementsList[index + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (this.state.isOptionsOpen) {
      this.optionsToJobPosting();   
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
        {this.state.isJobPostingOpen
          ? <JobPostingInput end={this.jobPostingToQuestionnaire}/>
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
