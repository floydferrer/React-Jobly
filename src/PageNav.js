import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const PageNav = (args) => {
  
  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Jobly</NavbarBrand>
          <Nav className="ml-auto flex-row" navbar>
            <NavItem className="me-5">
              <NavLink href="/components/">Companies</NavLink>
            </NavItem>
            <NavItem className="me-5">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Jobs
              </NavLink>
            </NavItem>
            <NavItem className="me-5">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Profile
              </NavLink>
            </NavItem>
            <NavItem className="me-2">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Logout
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}

export default PageNav
