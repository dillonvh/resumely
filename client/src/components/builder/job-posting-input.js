import React, { Component } from 'react';

const inputStyle = {
  backgroundColor: '#0D0630',
  color: '#E6F9AF',
  borderStyle: 'none none solid none',
  borderColor: '#E6F9AF',
  outline: 'none',
  marginLeft: '5pt',
}

const buttonStyling = {
  backgroundColor:'#E6F9AF', 
  color: '#0D0630', 
  borderStyle: 'none',
  borderRadius: '10%',
  outline: 'none',
  margin: '5pt',
  cursor: 'pointer',
}

class JobPostingInput extends Component {
  render() {
    return (
      <div id="JobPostingInput" style={{ height:'40rem' }}>
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
