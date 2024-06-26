import "./Cart.css";
import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvas";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Cart = (props) => {
  const { items, totalAmount, clearItem } = useContext(CartContext);
  const hasItems = items.length > 0;
  const cartItems = (
    <ul className="cartitems">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas onClose={props.onClose}>
      <div className="cart-head">
        <h2>sepetim</h2>
        <a className="cart-close" href="/" onClick={props.onClose}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam değer</span>
        <span>{totalAmount} TL</span>
      </div>
      {hasItems && (
        <div className="actions">
          <button className="cart-order">sipariş ver</button>
          <button className="cart-clear" onClick={clearItem}>
            temizle
          </button>
        </div>
      )}
    </Offcanvas>
  );
};

export default Cart;
