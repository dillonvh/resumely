import React, { Component } from 'react';

class Education extends Component {
  // placeholder
  isFuture(date) {
    return false;
  }
  render() {
    let json = this.props.json;
    return (
      <div id="resume-education">
        <h3>Education</h3>
        {json.schools.map(school => (
          <div key={school.name}>
            <span>
              <b>
                {school.name}
              </b>
            </span>
            <span style={{ float: 'right' }}>
              {school.location}
            </span>
            <br />
            <span>
              Bachelor of Science, &nbsp;
              {/* TODO: add type of degree (B.A., B.S., M.A., PhD) */}
              {school.major}, &nbsp;
              {school.minor}, &nbsp;
              <b>
                GPA: &nbsp;
                {school.gpa}
              </b>
            </span>
            <span style={{ float: 'right'}}>
              {json.schools.length > 1 ? school.startDate : null} -
              {this.isFuture(school.endDate) ? "Expected: " : null}
              {school.endDate}  
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
