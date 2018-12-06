import React, { Component } from 'react';

class Skills extends Component {
  render() {
    let json = this.props.json;
    let arr = [
      json.languages,
      json.frameworks,
      json.libraries,
      json.tools,
      json.platforms,
    ];
    let arrNames = [
      'Languages',
      'Frameworks',
      'Libraries',
      'Tools',
      'Platforms',
    ];
    return (
      <div id="resume-skills">
        <h3>Skills</h3>
        {arr.map((category, i) => (
          <div key={arrNames[i]}>
            {arrNames[i]}
            {category.map((item, j) => (
              <span key={`${item}`}>{j === 0 ? ` ${item}` : `, ${item}`}</span>
            ))}
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Skills;
