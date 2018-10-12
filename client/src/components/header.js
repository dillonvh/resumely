import React from 'react';

const headerLink = {
  'cursor': 'pointer',
  'float': 'right',
  'padding-right': '5%',
};

const Header = ({ toggleAbout, toggleContact }) => {
  return (
    <div className="Header" style={{ 'padding-top': '1%', position: 'fixed', 'width': '100%', 'background': 'white' }}>
      <span style={{ float: 'left', 'padding-left': '5%' }}>
        Resumely
      </span>
      <span style={headerLink} onClick={toggleAbout}>
        About
      </span>
      <span style={headerLink} onClick={toggleContact}>
        Contact
      </span>
      <div style={{ float: 'center', 'padding-top': '2%' }}>
        <hr />
      </div>
    </div>
  );
}

export default Header;
