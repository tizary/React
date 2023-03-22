import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/home" className="item-link">
          Home
        </NavLink>
        <NavLink to="/about" className="item-link">
          About
        </NavLink>
      </div>
    );
  }
}

export default Header;
