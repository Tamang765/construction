import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const isSticky = scrollPosition > 5 * window.innerHeight / 100; 
      setIsNavbarSticky(isSticky);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Navbar
    expand="lg"
    className={`header d-flex ${isNavbarSticky ? 'sticky-navbar' : ''}`}
    style={{ zIndex: "1" }}
    sticky="top"
  >
      <Container fluid className=" d-flex justify-content-between gap-4">
        
          <Navbar.Brand href="/">
            <img src="/media/log-nobg.png" alt="logo" width={80} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{height:"fit-content"}} />
          <Navbar.Collapse id="navbarScroll" className="align-items-center w-100">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex gap-3 collapsebar justify-content-center"
              style={{ maxHeight: "600px",width:"100%" }}
            
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutmarvel">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/project">Projects</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/career">Career</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
         
    
      </Container>
    </Navbar>
  );
};

export default Header;
