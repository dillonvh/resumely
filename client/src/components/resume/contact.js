import React, { Component } from 'react';

const fontStyling = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

class Contact extends Component {
  render() {
    let json = this.props.json;
    return (
      <div id="resume-contact" style={fontStyling}>
        <h1 style={{marginBlockEnd: '0em'}}> {json.name} </h1>
        {json.phone} | 
        <a href={"mailto:"+json.mail}>
          {json.email}</a> | 
        <a href={"https://www."+json.linkedin}>
          {json.linkedin}</a> | 
        <a href={"https://"+json.portfolio}>
          {json.portfolio}</a>
        {json.websites.map(site => <span key={site}> | <a href={"https://"+site}>{site}</a> </span>)}
      </div>
    );
  }
}

export default Contact;
