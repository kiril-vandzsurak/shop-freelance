import { Container, Row, Col } from "react-bootstrap";
import styles from "./MainPage.module.css";
import Form from "react-bootstrap/Form";
import ProductList from "../ProductList/ProductList";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

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

  const menCategory = useSelector(
    (state) => state.categoriesProduct.menCategory
  );
  const womenCategory = useSelector(
    (state) => state.categoriesProduct.womenCategory
  );

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
              <Form style={{ width: "430px" }}>
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
            <Link to={`/cart`}>
              <img
                className={styles.bucket_logo}
                src={window.location.origin + "/cart.png"}
                alt="img"
              />
            </Link>
          </Col>
        </Row>
      </Container>
      <div className={styles.navbar}>
        <Navbar expand="lg" className={styles.navbarColor}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ marginInline: "auto" }}>
              <NavDropdown
                title="Men"
                id="men-dropdown"
                show={isMenDropdownOpen}
                onMouseEnter={handleMenDropdownToggle}
                onMouseLeave={handleMenDropdownToggle}
                className={`${styles.customNavDropdown} ${styles.navbarFont}`}
              >
                {menCategory.map((product) => (
                  <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    style={{ textDecoration: "none" }}
                    state={{ product }}
                  >
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      img={product.img}
                    />
                  </Link>
                ))}
              </NavDropdown>
              <NavDropdown
                title="Women"
                id="women-dropdown"
                show={isWomenDropdownOpen}
                onMouseEnter={handleWomenDropdownToggle}
                onMouseLeave={handleWomenDropdownToggle}
                className={`${styles.customNavDropdown} ${styles.navbarFont}`}
              >
                {womenCategory.map((product) => (
                  <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    style={{ textDecoration: "none" }}
                    state={{ product }}
                  >
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      img={product.img}
                    />
                  </Link>
                ))}
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
