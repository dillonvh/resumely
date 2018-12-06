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
            {school.name}
            {school.location}
            {json.schools.length > 1 ? school.startDate : null}
            {this.isFuture(school.endDate) ? "Expected: " : null}
            {school.endDate}
            {school.gpa}
            {school.major}
            {school.minor}
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
