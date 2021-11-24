import React from 'react';
import {Link} from "react-scroll";

function Nav() {

  return (
    <nav className="navbar">
      <div className="nav-containter">
        <div className="name">
          <p>Ian <span>Cohen</span></p>
        </div>
        <div className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="work">My Work</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;