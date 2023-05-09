import { Button } from "react-bootstrap";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleReset = () => {
    if (cart.length > 0) {
      dispatch(resetCart());
      window.alert("Your order is accepted");
    } else {
      window.alert("You haven't chosen any product");
    }
  };

  return (
    <div>
      <div className={styles.itemsBlock}>
        {cart.map((product) => (
          <div>
            <span>{product.id}</span>
            <span>{product.name}</span>
            <img src={product.img} alt="..." />
          </div>
        ))}
      </div>
      <Button onClick={handleReset}>BUY</Button>
    </div>
  );
};

export default Cart;
