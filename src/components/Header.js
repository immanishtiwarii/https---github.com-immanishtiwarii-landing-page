import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavDropdown } from "react-bootstrap";


const Header = () => {
  return (
    <>
      <section class="colored-section" id="title">
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <h2>
                DESIGN
                <br />
                <span>AGENCY</span>
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto" id="#navbarhome">
                
                  <Nav.Link className="nav-item" href="#home">
                  specialize in
                  </Nav.Link>
                  <Nav.Link className="nav-item" href="#features">
                     case study
                  </Nav.Link>
                  <Nav.Link className="nav-item" href="#pricing">
                       process
                  </Nav.Link>
                  <Nav.Link className="nav-item" href="#pricing">
                     Industries
                  </Nav.Link>
                   <Nav.Link>
                    <Button variant="secondary" className="btn1 align-text-right" size="lg">
                       Schedule A call
                    </Button>
                  </Nav.Link>
                  <Nav.Link className="">
                     <Button variant="secondary" className="btn2" size="lg">
                      We are Hiring
                    </Button>
                  </Nav.Link>
               </Nav>
             </Navbar.Collapse >
                
          
           
          </Container>
        </Navbar>

        <div className="main-background">
          <div
            className="container-fluid "
            style={{
              backgroundColor: "#00ff00",
              borderBottomLeftRadius: "300px",
            }}
          >
            <div className="container background container-fluid">
              <div className="asset-shape">
                <img  className="bg-img " src="img/title-img.svg" alt="man" ></img>
              </div>
              <div className="heading  col-sm-6 col-md-10">
                <h1>
                  INNOVATION DIGITAL <br />
                  TECHNOLOGY
                </h1>
                <p>everthing we do is the consumer, imagination and you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
