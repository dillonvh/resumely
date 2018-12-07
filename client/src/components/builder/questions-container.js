import React, { Component } from 'react';
import Question from './question.js';
import getQuestions from './get-questions.js';

const itemStyle = {
  fontSize: '1em',
  padding: '30%',
  outline: 'none'

};

const buttonStyling = {
  backgroundColor:'#a8e1f6', 
  color: '#3924c1', 
  borderStyle: 'none',
  borderRadius: '10%',
  outline: 'none',
}

const optionStyling = {
  backgroundColor: '#3924c1',
  color: '#a8e1f6',
  borderStyle: 'none',
  borderRadius: '10%',
  margins: '5pt',
  outline: 'none',
}

class QuestionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.isQuestionnaire
        ? getQuestions.bind(this)()
        : this.getOptions(),
    };
  }

  // FIXME : should probably store this somewhere else
  // in fact, im probably going to have to change how this component works
  // a bit and instead use the question component for the options too
  getOptions() {
    let options = [];
    options.push(<div className="Option" key={0} style={itemStyle}>
        What is your seniority level?
        <br />
        <select style={optionStyling}>
          <option value="associate">Associate</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
        <br />
        <button onClick={() => this.props.scroll(0)} style={buttonStyling}>
          Scroll
        </button>
      </div>
    );
    options.push(<div className="Option" key={1} style={itemStyle}>
        What kind of job are you applying for?
        <br />
        <select style={optionStyling}>
          <option value="engineering">Engineering</option>
          <option value="management">Management</option>
          <option value="UX">UX</option>
          <option value="design">Design</option>          
        </select>
        <br />
        <button onClick={() => this.props.scroll(1)} style={buttonStyling}>
          Scroll
        </button>
      </div>
    );
    return options;
  }

  // TODO: fill in with questions from template stored elsewhere
  // and change key prop to question id
  getQuestions() {
    let questions = [];
    for (let i = 0; i < 3; i++) {
      questions.push(
        <Question
          index={i}       
          itemStyle={itemStyle}
          buttonStyling={buttonStyling}
          key={i}
          scroll={this.props.scroll}
        />
      );
    }
    return questions;
  }

  render() {
    let elements = [];
    let jsx = (
      <div id="QuestionsContainer">
        {this.state.items.map(item => {
          return <div key={item.key}>
              <div ref={el => { elements.push(el); }}>
                {item}
              </div>
            </div>;
        })}
      </div>
    );
    this.props.updateElementsList(elements);
    return(jsx);
  }
}

export default QuestionsContainer;
