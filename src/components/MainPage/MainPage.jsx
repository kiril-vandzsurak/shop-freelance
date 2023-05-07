import { Container, Row, Col } from "react-bootstrap";
import styles from "./MainPage.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MainPage = () => {
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
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </div>
            <div>
              {" "}
              <Button style={{ marginBottom: "16px" }}>Search</Button>
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
    </div>
  );
};

export default MainPage;
