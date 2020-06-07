import React, { useState, useContext } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const context = useContext(UserContext);
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand className="text-white">Blog</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" className="text-white">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/authors" className="text-white">
              Authors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/posts/addnew" className="text-white">
              NewPost
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <>
              <NavItem>
                <NavLink tag={Link} to="/logout" className="text-white">
                  Logout
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  SignIn
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signout" className="text-white">
                  SignUp
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
