import React, { Component } from 'react';

class Projects extends Component {
  render() {
    let projects = this.props.json;
    return (
      <div id="resume-projects">
        <h3>Projects</h3>
        {projects.map(project => (
          <div key={project.name}>
            <span>{project.name}</span>
            <span style={{ float: 'right' }}>
              {project.startDate} - 
              {project.endDate}
            </span>
            <ul>
              {project.numUsers
                ? <li>Has {project.numUsers} users</li>
                : null
              }
              {project.description.map((item, index) => (
                <li key={`${project.name}bullet${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
