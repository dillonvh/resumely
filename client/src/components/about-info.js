import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AboutInfo extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Body>This is the about body.</Modal.Body>
      
          <Modal.Footer>
            <Button>Dummy</Button>
            <Button bsStyle="primary">Dummy</Button>
          </Modal.Footer>
          
        </Modal.Dialog>
      </div>
    );
  }
}

export default AboutInfo;
