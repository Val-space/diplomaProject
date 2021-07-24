import React from "react";
import Button from "@material-ui/core/Button";
// import DeleteIcon from '@material-ui/icons/Delete';
import "../style/cart.css";

function CartItem({ item, removeFromCart, changeQuantity }) {
  return (
    <>
      <div className={"cart-inner__row"}>
        <div className={"cart-product-img"}>
          <img src={item.cartItem.imgSrc} alt="product" />
        </div>

        <div className={"cart-product-about"}>
          <div className={"cart-product-about__name"}>{item.cartItem.name}</div>
          <div>{item.cartItem.size}</div>
          <div>{item.cartItem.price}$</div>
        </div>

        <div className={"cart__quantity-selector"}>
          <input
            type="number"
            defaultValue={item.count}
            min={1}
            onChange={(e) => changeQuantity(item.cartItem.id, e.target.value)}
          ></input>
        </div>
        <div>
          {" "}
          <Button
           
            style={{ marginTop: "1rem" }}
            onClick={() => removeFromCart(item.cartItem.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
