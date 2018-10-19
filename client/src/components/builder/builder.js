import React, { Component } from 'react';
import QuestionsContainer from './questions-container.js';


class Builder extends Component {
  constructor() {
    super();
    this.endQuestionaire = this.endQuestionaire.bind(this);
  }

  endQuestionaire() {

  }

  render() {
    return (
      <div id="Builder" style={{ 'paddingTop': '5%'}}>
        This is where the builder goes.
        Here are some questions:
        <QuestionsContainer endQuestionaire={this.endQuestionaire}/>
      </div>
    );
  }
}

export default Builder;
