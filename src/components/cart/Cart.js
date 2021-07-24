import React from "react";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";
import "../style/cart.css";

function Cart({ cart, removeFromCart, changeQuantity }) {
  return (
    <div className={"cart"}>
      <h1 className={"cart-title"}>My cart</h1>
      {cart.length ? (
        <div className={"cart-container"}>
          <div className={"cart-inner"}>
            {/* <div className={"cart-inner__row"}>
              <div>Product</div>
              <div>Quantity</div>
            </div> */}

            <div>
              {cart.map((item) => (
                <CartItem
                  key={item.cartItem.id + item.cartItem.name}
                  removeFromCart={removeFromCart}
                  item={item}
                  changeQuantity={changeQuantity}
                />
              ))}
            </div>
          </div>
          <div className={"cart__total-price"}>
            <TotalPrice cart={cart} />
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", fontSize: "2rem" }}>
          Cart is empty
        </div>
      )}
    </div>
  );
}

export default Cart;
