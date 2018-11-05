import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import ContactInfo from './contact-info';
import AboutInfo from './about-info';

// this component and nested components
// are to be formatted, styled, and filled in later
class InfoPanel extends Component {
  constructor(props) {
    super(props);
    this.contentOptions = {
      contact: {
        title: 'Contact',
        component: <ContactInfo />,        
      },
      about: {
        title: 'About',
        component: <AboutInfo />,
      },
    };
  }

  render() {
    return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            {this.contentOptions[this.props.contentOption].title}
          </Modal.Title>
        </Modal.Header>
        {this.contentOptions[this.props.contentOption].component}
      </Modal.Dialog>
    </div>
    );
  }
}

export default InfoPanel;
