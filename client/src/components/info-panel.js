import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import ContactInfo from './contact-info';
import AboutInfo from './about-info';

class AboutPanel extends Component {
  render() {
    return (
      <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            {this.props.isContact ? <span>Contact</span> : <span>About</span>}
          </Modal.Title>
        </Modal.Header>
        {this.props.isContact ? <ContactInfo /> : <AboutInfo/>}
      </Modal.Dialog>
    </div>
    );
  }
}

export default AboutPanel;
