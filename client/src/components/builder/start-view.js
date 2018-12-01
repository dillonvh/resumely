import React from 'react';

const StartView = ({ start }) => {
  return (
    <div id="StartView" style={{paddingBottom: '21em'}}>
      This is the start screen.
      <br />
      Click to start the questionnaire:
      <br />
      <button onClick={start} style={{backgroundColor: '#a8e1f6', color: '#3924c1', borderStyle: 'none', borderRadius: '10%'}}>Start</button>
    </div>
  );
};

export default StartView;
