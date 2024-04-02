import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">LO DE PITU</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link to="/category/vacuna" as={NavLink}>VACUNA</Nav.Link>
            <Nav.Link to="/category/pollo" as={NavLink}>POLLO</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
        
        </>
    )
};