import React from 'react';

const StartView = ({ start }) => {
  return (
    <div id="StartView">
      This is the start screen.
      <br />
      Click to start the questionaire:
      <br />
      <button onClick={start}>Start</button>
    </div>
  );
};

export default StartView;
