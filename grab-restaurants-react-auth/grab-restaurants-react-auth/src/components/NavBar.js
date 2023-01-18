import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from "reactstrap";

function NavBar({ currentUser, logout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-dark">
        <NavbarBrand href="/">Grabrestaurants</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add"> Add</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register"> Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login" onClick={currentUser ? logout : ""}>
                {currentUser ? "Logout" : "Login"}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">
                {" "}
                Profile{(currentUser && currentUser?.username) || ""}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
