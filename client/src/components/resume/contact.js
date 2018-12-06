import React, { Component } from 'react';

class Contact extends Component {
  render() {
    let json = this.props.json;
    return (
      <div id="resume-contact">
        <h3> {json.name} </h3>
        <br />
        {json.phone} | {json.email} | 
        {json.linkedin} | {json.portfolio}
        {json.websites.map(site => <div key={site}> | {site} </div>)}
      </div>
    );
  }
}

export default Contact;
