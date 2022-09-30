import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';

function MyNavBar({ currUser, logOutHandler }) {
  return (
    <Navbar className="navbar" expand="lg">
      <Container className="header">
        <Navbar.Brand>
          {' '}
          <NavLink className="logo" to="/">Gallery</NavLink>
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link">
            {currUser.id ? `of ${currUser.name}` : 'Hello, photographer!'}
          </Nav>

          <Nav className="me-auto">
            {currUser.id
              ? (
                <>
                  <Nav className="pipe-separate mgL t-light-green left">
                    <Button className="nav-link" onClick={logOutHandler} variant="link">
                      Logout
                    </Button>
                  </Nav>

                </>
              )
              : (
                <>
                  <Nav className="pipe-separate t-light-green left"><NavLink className="nav-link" to="/user/registration">Sign Up</NavLink></Nav>
                  <Nav className="pipe-separate t-light-green left"><NavLink className="nav-link" to="/user/authorization">Sign In</NavLink></Nav>
                </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
