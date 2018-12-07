import React, { Component } from 'react';

const inputStyle = {
  backgroundColor: '#3924c1',
  color: '#a8e1f6',
  borderStyle: 'none none solid none',
  borderColor: '#a8e1f6',
  outline: 'none',
  marginLeft: '5pt',
}

const buttonStyling = {
  backgroundColor:'#a8e1f6', 
  color: '#3924c1', 
  borderStyle: 'none',
  borderRadius: '10%',
  outline: 'none',
  margin: '5pt'
}

class JobPostingInput extends Component {
  render() {
    return (
      <div id="JobPostingInput" style={{ height:'25em' }}>
        <label>
          URL of Job Posting:
          <input autoFocus type="text" style={inputStyle}/>
        </label>
        <br />        
        <label>
          Minimum Qualifications:
          <input type="text" style={inputStyle}/>
        </label>
        <br />
        <label>
          Preferred Qualifications:
          <input type="text" style={inputStyle}/>
      </label>
      <br />      
      <button onClick={this.props.end} style={buttonStyling}>Done</button>
      </div>
    );
  }
}

export default JobPostingInput;
