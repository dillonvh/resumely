import React from 'react';

const buttonStyling = {
  backgroundColor: '#E6F9AF', 
  color: '#0D0630', 
  borderStyle: 'none', 
  borderRadius: '10%', 
  cursor: 'pointer'
}
const StartView = ({ start }) => {
  return (
    <div id="StartView" style={{paddingBottom: '51em'}}>
      This is the start screen.
      <br />
      Click to start the questionnaire:
      <br />
      <button onClick={start} style={buttonStyling}>Start</button>
    </div>
  );
};

export default StartView;
