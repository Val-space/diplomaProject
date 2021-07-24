import React, { useState, useEffect, useContext } from "react";
import { LocationContext } from "../Context";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function TotalPrice({ cart }) {
  const { location } = useContext(LocationContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let updatedPrice = cart.reduce(
      (acc, el) => acc + el.cartItem.price * el.count,
      0
    );
    setTotalPrice(updatedPrice.toFixed(2));
  }, [cart]);

  return (
    <>
      <div className={"cart-summary"}>CART SUMMARY</div>
      <div className={"cart-summary__price"}>TOTAL: {totalPrice}$</div>
      <div>Shipping & taxes calculated at checkout</div>
      {location.city.length ? (
        <div style={{ fontSize: "1.3rem" }}>Your city is {location.city} </div>
      ) : (
        <div>You did not select your location</div>
      )}
      <Link to={"/checkout"}>
        <Button style={{ marginTop: "1rem" }} fullWidth={true}>
          checkout
        </Button>
      </Link>
    </>
  );
}

export default TotalPrice;
