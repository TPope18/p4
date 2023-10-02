// Header.jsx

import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src="/path/to/your/image.png" alt="Your Logo" className="logo" />
        <h1>Welcome to My Unique Header</h1>
        <p>Subtitle or additional information</p>
      </div>
    );
  }
}

export default Header;
