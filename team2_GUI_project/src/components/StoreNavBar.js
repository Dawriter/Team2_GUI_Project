import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Basic component for navigating via the router.

export default class StoreNavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top" fixed="top" variant="light">
        <Container>
          <Link className="nav_item" to="/">
          <Navbar.Brand>Origami Store</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav_item" to="/"><button className="nav_button">Home</button></Link>
              <Link className="nav_item" to="/products"><button className="nav_button">Browse</button></Link>
              <Link className="nav_item" to="/cart"><button className="nav_button">Shopping Cart</button></Link>
              <Link className="nav_item" to="/checkout"><button className="nav_button">Check Out</button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}