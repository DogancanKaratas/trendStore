import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";
import Offcanvas from "../UI/Offcanvas";

const Cart = (props) => {
  const cartItems = (
    <ul className="cartitems">
      {products.map((product) => (
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
        <span>toplam değer</span>
        <span>10 TL</span>
      </div>
      <div className="actions">
        <button className="cart-order">sipariş ver</button>
        <button className="cart-clear">temizle</button>
      </div>
    </Offcanvas>
  );
};

export default Cart;
