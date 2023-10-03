import { Container, Navbar, Button, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import './Style.css';
import COMC from '../assets/comc.jpeg';
import UTC from '../assets/utc.jpeg';

export default function HeaderDesktop() {
    return (
        <>
            {/* //This is the area where you paste your HTML codes */}
        <Navbar expand="lg" className="NavbarDs">
          <Container fluid>
            <Navbar.Brand>
              <img src={COMC} className="logonav" alt="logonav" style={{width: `10%`}} /> 
              <img src={UTC} className="logonav float-end" alt="logonav" style={{width: `7%`}} /></Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )   
}