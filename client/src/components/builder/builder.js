import React, { Component } from 'react';
import Question from './question.js';

class Builder extends Component {
  render() {
    return (
      <div id="Builder" style={{ 'padding-top': '5%'}}>
        This is where the builder goes.
        Here are some questions:
        <ul>
            <li>
                <Question />
            </li>
            <li>
                <Question />
            </li>

            <li>
                <Question />
            </li>
        </ul>
      </div>
    );
  }
}

export default Builder;
