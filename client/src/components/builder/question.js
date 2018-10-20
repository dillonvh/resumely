import React, { Component } from 'react';

const questionStyle = {
  fontSize: '2em',
  padding: '30%',
};

class Question extends Component {
  render() {
    return (
      <div id="Question" style={questionStyle}>
        This is an individual question.
        <br />
        <button onClick={() => this.props.scroll(this.props.index)}>
          Scroll
        </button>
      </div>
    );
  }
}

export default Question;
