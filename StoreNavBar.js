import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class StoreNavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top" variant="light">
        <Container>
          <Link className="nav_item" to="/landing">
          <Navbar.Brand>Origami</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav_item" to="/">Browse</Link>
              <Link className="nav-item" to="/cart">Shopping Cart</Link>
              <Link className="nav_item" to="/checkout">Check Out</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}