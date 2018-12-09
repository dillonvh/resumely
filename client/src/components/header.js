import React from 'react';


const headerStyle = {
  color: '#8BBEB2',
  background: '#384E77',
  padding: '1% 2% 1% 2%',
  position: 'fixed',
  width: '100%',
};

const headerLinkStyle = {
  margin: '0.5%',
  fontFamily : 'Poppins',
  fontSize: '1.5em',
  cursor: 'pointer',
  float: 'right',
  background: '#384E77', 
};

const titleStyle = {
  color: '#8BBEB2',
  fontFamily : 'Fugaz One',
  float: 'left',
  fontSize: '2.2em',
  background: '#384E77', 
};

const Header = ({ toggleAbout, toggleContact }) => {
  return (
    <div className="page-header" style={headerStyle}>
      <span style={titleStyle}>
      Resumly
      </span>
      <span onClick={toggleAbout} style={headerLinkStyle}>
      About
      </span>
      <span onClick={toggleContact} style={headerLinkStyle}>
      Contact
      </span>
    </div> 
  );
}

export default Header;
