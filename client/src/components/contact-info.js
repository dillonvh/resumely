import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ContactInfo extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Body>This is the contact body.</Modal.Body>
      
          <Modal.Footer>
            <Button>Dummy</Button>
            <Button bsStyle="primary">Dummy</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    );
  }
}

export default ContactInfo;
