import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div id="Question" style={this.props.itemStyle}>
        This is an individual question.
        <br />
        <input type="text" />
        <button onClick={() => {this.props.scroll(this.props.index)}}>
          Scroll
        </button>
      </div>
    );
  }
}

export default Question;
