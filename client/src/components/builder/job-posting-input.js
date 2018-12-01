import React, { Component } from 'react';

class JobPostingInput extends Component {
  render() {
    return (
      <div id="JobPostingInput" style={{ height:'25em' }}>
        <label>
          URL of Job Posting:
          <input type="text" />
        </label>
        <br />        
        <label>
          Minimum Qualifications:
          <input type="text" />
        </label>
        <br />
        <label>
          Preferred Qualifications:
          <input type="text" />
      </label>
      <br />      
      <button onClick={this.props.end}>Done</button>
      </div>
    );
  }
}

export default JobPostingInput;
