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
        <NavLink to="/form" className="item-link">
          Form
        </NavLink>
      </div>
    );
  }
}

export default Header;
