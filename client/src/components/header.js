import React from 'react';

const headerStyle = {
  background: 'white',
  paddingTop: '1%',
  position: 'fixed',
  width: '100%',
};

const headerLinkStyle = {
  cursor: 'pointer',
  float: 'right',
  paddingRight: '5%',
};

const titleStyle = {
  color: '#eac6ff',
  fontFamily : 'Fugaz One',
  float: 'left',
  paddingLeft: '5%', 
};

const Header = ({ toggleAbout, toggleContact }) => {
  return (
      <div id="Header" style={headerStyle}>
        <span style={titleStyle}>
        Resumly
        </span>
        <span onClick={toggleAbout} style={headerLinkStyle}>
        About
        </span>
        <span onClick={toggleContact} style={headerLinkStyle}>
        Contact
        </span>
        <div style={{ float: 'center', paddingTop: '2%' }}>
          <hr/>
        </div>
      </div>
  );
}

export default Header;
