import React, { Component } from 'react';

class Experience extends Component {
  render() {
    let experiences = this.props.json;
    return (
      <div id="resume-experience">
        <h3>Experience</h3>
        {experiences.map(exp => (
          <div key={exp.company}>
            {exp.company}
            {exp.location}
            {exp.positions.map(position => (
              <div key={position.positionTitle}>
                {position.positionTitle}
                {position.startDate}
                {position.endDate}
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
