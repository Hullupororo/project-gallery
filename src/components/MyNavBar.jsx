import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';

function MyNavBar({ currUser, logOutHandler }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand link to="/">Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link">
            {currUser.id ? currUser.name : 'Hello, photographer!'}
          </Nav>

          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            {currUser.id
              ? (
                <>
                  <Nav className="pipe-separate t-light-green left">
                    <Button className="nav-link" onClick={logOutHandler} variant="light">
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
