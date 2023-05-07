import { Container, Row, Col } from "react-bootstrap";
import styles from "./MainPage.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProductList from "../ProductList/ProductList";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenDropdownOpen, setIsMenDropdownOpen] = useState(false);
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);

  const handleMenDropdownToggle = () => {
    setIsMenDropdownOpen(!isMenDropdownOpen);
  };

  const handleWomenDropdownToggle = () => {
    setIsWomenDropdownOpen(!isWomenDropdownOpen);
  };
  return (
    <div>
      <Container fluid>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center align-items-center">
            <img
              className={styles.logo}
              src={window.location.origin + "/logo-shop.png"}
              alt="img"
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img
              className={styles.bucket_logo}
              src={window.location.origin + "/cart.png"}
              alt="img"
            />
          </Col>
        </Row>
      </Container>
      <div className={styles.navbar}>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ marginInline: "auto" }}>
              <NavDropdown
                title="Men"
                id="men-dropdown"
                show={isMenDropdownOpen}
                onMouseEnter={handleMenDropdownToggle}
                onMouseLeave={handleMenDropdownToggle}
                className={styles.customNavDropdown}
              >
                <span>fuck no babe</span>
              </NavDropdown>
              <NavDropdown
                title="Women"
                id="women-dropdown"
                show={isWomenDropdownOpen}
                onMouseEnter={handleWomenDropdownToggle}
                onMouseLeave={handleWomenDropdownToggle}
                className={styles.customNavDropdown}
              >
                <span>fuck no babe</span>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <ProductList searchQuery={searchQuery} />
    </div>
  );
};

export default MainPage;
