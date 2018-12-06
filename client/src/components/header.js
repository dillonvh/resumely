import React from 'react';


const headerStyle = {
  background: '#430866',
  paddingTop: '1%',
  position: 'fixed',
  width: '100%',
};

const headerLinkStyle = {
  color: '#eac6ff',
  fontFamily : 'Poppins',
  fontSize: '1.5em',
  cursor: 'pointer',
  float: 'right',
  paddingRight: '5%',
  background: '#430866', 
  paddingTop: '1.0%',
};

const titleStyle = {
  color: '#eac6ff',
  fontFamily : 'Fugaz One',
  float: 'left',
  paddingLeft: '5%', 
  fontSize: '2.2em',
  background: '#430866', 
};

const header = {
  background: "blue",
}

const Header = ({ toggleAbout, toggleContact }) => {
  return (
    <div className="page-header" style={header}>
      <div style={headerStyle}>
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
          </div>
      </div>
    </div> 
  );
}

export default Header;
