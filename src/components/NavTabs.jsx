import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTabs.css'

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li>
        <NavLink
          to="/"
          end
          className='logo'
        >
          Antonio/&gt;
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="portfolio"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
