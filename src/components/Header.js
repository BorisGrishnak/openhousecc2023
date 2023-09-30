import { Container, Navbar, Button, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import './Style.css';
import Brand from '../assets/brand.png';
import Mao from '../assets/mao.png';

export default function Header() {
    return (
        <>
            {/* //This is the area where you paste your HTML codes */}
        <Navbar expand="lg" className="NavbarSt">
          <Container fluid>
            <Navbar.Brand>
              <img src={Brand} className="logonav" alt="logonav" style={{width: `50%`}} /> 
              <img src={Mao} className="logonav float-end" alt="logonav" style={{width: `40%`}} /></Navbar.Brand>
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