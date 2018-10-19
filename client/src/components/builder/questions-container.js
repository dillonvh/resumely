import React, { Component } from 'react';
import Question from './question.js';

class QuestionsContainer extends Component {
  constructor() {
    super();
    this.elementsList = [];    
    this.scroll = this.scroll.bind(this);
    
    this.state = {
      questions: this.getQuestions(),
    };
  }

  // TODO: fill in with questions from template stored elsewhere
  getQuestions() {
    let questions = [];
    for (let i=0; i<3; i++) {
      questions.push(<Question scroll={this.scroll} index={i}/>);
    }
    return questions;
  }

  scroll(index) {
    if (index < this.elementsList.length-1) {
      this.elementsList[index+1].scrollIntoView({ behavior: 'smooth' });
    } else {
      this.props.endQuestionaire();
    }
  }

  render() {
    return (
      <div className="QuestionsContainer">
        This is the questions list:
        {this.state.questions.map(question => {
            return (
              <div>
                <div ref={el => { this.elementsList.push(el); }}>{question}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default QuestionsContainer;
