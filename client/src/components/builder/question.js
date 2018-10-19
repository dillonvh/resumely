import React, { Component } from 'react';

const questionStyle = {
  fontSize: '2em',
  padding: '30%',
};

class Question extends Component {
  render() {
    return (
      <div className="Question" style={questionStyle}>
        This is an individual question.
        <button onClick={() => this.props.scroll(this.props.index)}>Scroll</button>
      </div>
    );
  }
}

export default Question;
