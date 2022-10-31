import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


export default function NavBar() {

    const location = useLocation();
    
    if (location.pathname === "/") {
        return (

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="/">Just Jokes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse>
                        <NavDropdown>
                            <NavDropdown.Item href="/dadjokes">Dad Jokes</NavDropdown.Item>
                            <NavDropdown.Item href="/yomamajokes">Yo Mama Jokes</NavDropdown.Item>
                            <NavDropdown.Item href="/searchjokes">Search Jokes</NavDropdown.Item>
                        </NavDropdown>
                    </NavbarCollapse>                
            </Navbar>
        )
    } else if (location.pathname === "/dadjokes") {
        return (

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="/">Just Jokes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse>
                        <NavDropdown>
                            <NavDropdown.Item href="/yomamajokes">Yo Mama Jokes</NavDropdown.Item>
                            <NavDropdown.Item href="/searchjokes">Search Jokes</NavDropdown.Item>
                        </NavDropdown>
                    </NavbarCollapse>                
            </Navbar>    
        )
    } else if (location.pathname === "/searchjokes") {
        return (
            
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="/">Just Jokes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse>
                        <NavDropdown>
                            <NavDropdown.Item href="/dadjokes">Dad Jokes</NavDropdown.Item>
                            <NavDropdown.Item href="/yomamajokes">Yo Mama Jokes</NavDropdown.Item>
                        </NavDropdown>
                    </NavbarCollapse>                
            </Navbar>
        )
    } else {
        return (

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="/">Just Jokes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse>
                        <NavDropdown>
                            <NavDropdown.Item href="/dadjokes">Dad Jokes</NavDropdown.Item>
                            <NavDropdown.Item href="/searchjokes">Search Jokes</NavDropdown.Item>
                        </NavDropdown>
                    </NavbarCollapse>                
            </Navbar>
        )
    }
        
}