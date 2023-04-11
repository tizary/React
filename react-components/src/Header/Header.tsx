import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = function Header() {
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
};
