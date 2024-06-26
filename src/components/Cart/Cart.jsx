import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";

const Cart = () => {
  const cartItems = (
    <ul className="cartitems">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <div className="offcanvas">
      <div className="content">
        <div className="cart-head">
          <h2>sepetim</h2>
          <a href="/">X</a>
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
      </div>
    </div>
  );
};

export default Cart;
