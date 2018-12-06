import { Component } from 'react';
import ReactDOM from 'react-dom';

class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
  }
  componentDidMount() {
    this.externalWindow = window.open('', '', 'width=1000,height=800');
    this.externalWindow.document.body.appendChild(this.containerEl);
    this.externalWindow.addEventListener('beforeunload', this.props.onClose);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}

export default ResumeContainer;
