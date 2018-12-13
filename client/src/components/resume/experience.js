import React, { Component } from 'react';

class Experience extends Component {
  render() {
    let experiences = this.props.json;
    return (
      <div id="resume-experience">
        <h3>Experience</h3>
        {experiences.map(exp => (
          <div key={exp.company}>
            <span>{exp.company}</span>
            <span style={{ float: 'right' }}>{exp.location}</span>
            {exp.positions.map(position => (
              <div key={position.positionTitle}>
                <span>
                  <b>{position.positionTitle}</b>
                </span>
                <span style={{ float: 'right' }}>
                  {position.startDate} - 
                  {position.endDate}
                </span>
                <ul>
                  {position.responsibilities.map((item, index) => (
                    <li key={`${exp.positionTitle}bullet${index}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
