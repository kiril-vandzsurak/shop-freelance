import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";

const ProductCard = ({ name, img }) => {
  return (
    <div>
      <Card style={{ width: "18rem", cursor: "pointer" }}>
        <Card.Img variant="top" src={window.location.origin + img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
