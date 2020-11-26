import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Nav,
  Navbar,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

const Header = () => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          CRUD
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/users">
                Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects">
                Projects
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
