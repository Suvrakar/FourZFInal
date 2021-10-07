import React from "react";
import "./NavBar.css";
import * as ReactBootStrap from "react-bootstrap";
import { default as logo } from "../../images/4zLogo.svg";

export default function Navbaar() {
  return (
    <div>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        defaultActiveKey="/home"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            <div className="MainLogo">
              <img src={logo} alt="Logo" />
            </div>
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="#features"></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>

            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link
                href="/"
                className="fw-bolder mynav"
                activeClassName="navbar__link--active"
                eventKey="link-2"
              >
                <div class="test">
                  <div class="stripe"></div>
                  Home
                </div>
              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link
                href="#/services/"
                className="fw-bolder mynav"
              >
                <div class="test">
                  <div class="stripe"></div>
                  Our Services
                </div>
              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link
                href="#/allprojects/"
                className="fw-bolder mynav"
              >
                <div class="test">
                  <div class="stripe"></div>
                  Projects
                </div>
              </ReactBootStrap.Nav.Link>

              <div class="test">
                <div class="stripe"></div>
                <div>
                  <ReactBootStrap.NavDropdown
                    title="About Us"
                    className="fw-bolder mynav"
                    id="collasible-nav-dropdown"
                  >
                    <ReactBootStrap.NavDropdown.Item
                      href="#/about/"
                      className="fw-bolder"
                    >
                      Our History, <br></br> Mission & Vision
                    </ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item
                      href="#/messageofmd/"
                      className="fw-bolder"
                    >
                      A Message from Our<br></br> Managing Director
                    </ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item
                      href="#/bdirectors/"
                      className="fw-bolder"
                    >
                      <div class="test">
                        <div class="stripe"></div>
                        Board of Directors
                      </div>
                    </ReactBootStrap.NavDropdown.Item>
                  </ReactBootStrap.NavDropdown>
                </div>
              </div>

              <ReactBootStrap.Nav.Link
                href="#/contact"
                className="fw-bolder mynav"
              >
                <div class="test">
                  <div class="stripe"></div>
                  Contact Us
                </div>
              </ReactBootStrap.Nav.Link>

              {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
              </ReactBootStrap.Nav.Link> */}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}
