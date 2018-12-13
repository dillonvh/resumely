import { Component } from 'react';
import ReactDOM from 'react-dom';

class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
    this.setStyle()
  }
  componentDidMount() {
    this.externalWindow = window.open('', '', 'width=1000,height=800');
    this.externalWindow.document.body.appendChild(this.containerEl);
    this.externalWindow.addEventListener('beforeunload', this.props.onClose);
  }
  setStyle() {
    this.containerEl.style.fontFamily = "sans-serif";
    this.containerEl.style.fontSize = "1.2rem";
    this.containerEl.style.margin= "2% 10% 2% 10%";
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}

export default ResumeContainer;
