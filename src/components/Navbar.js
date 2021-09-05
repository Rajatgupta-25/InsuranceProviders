import React from 'react';
import {Navbar, Nav, Form,FormControl,Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/navbar.css';

export default function NavBar(){
    return (
        <div >
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid>
  <Navbar.Brand>
      <Link className="link" to="/"><span className="fa fa-home"></span></Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link>
        <Link className="link" to="/features">Features</Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="link" to="/agent">Agent</Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="link" to="/insurance">Insurance</Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="link" to="/contactUs">Contact Us</Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="link" to="/help">Help</Link>
      </Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-secondary"><span className="fa fa-search"></span></Button>
    </Form>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}


