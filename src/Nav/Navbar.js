import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
return (
<nav className="navbar">
<h2 className="logo">My Website</h2>
<ul>
<li>
<NavLink to="/" exact className="nav-link"
activeClassName="active">Home</NavLink>
</li>
<li>
<NavLink to="/about" className="nav-link"
activeClassName="active">About</NavLink>
</li>
<li>
<NavLink to="/contact" className="nav-link"
activeClassName="active">Contact</NavLink>
</li>
</ul>
</nav>
);
}
export default Navbar;