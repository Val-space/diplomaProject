import React from "react";
import { useParams } from "react-router-dom";

import "../style/chosenProduct.css";

function OpenedItem({ addToCart, removeFromCart, cart, allProducts }) {
  let { id } = useParams();
  let state = allProducts.filter((i) => i.id === parseInt(id))[0];

  const isCartFull = cart.filter((el) => el.id === parseInt(id)).length;

  // console.log(id, state);

  return (
    <>
      <div className={"container"}>
        <div className={"product-container"}>
          <div>
            <img
              style={{ width: "300px" }}
              src={state?.imgSrc}
              alt={"product"}
            />
          </div>

          <div>
            <div className={"product-name"}>{state?.name}</div>
            <p>{state?.type}</p>
            <div className={"product-price"}>{state?.price}$</div>
            <div> {state?.size}</div>

            {/* ADD TO CART */}
            {isCartFull ? (
              <div className="button-wrap">
                <div onClick={() => removeFromCart(state.id)} className="btn-cart">
                  <span>remove</span>
                </div>
              </div>
            ) : (
              <div className="button-wrap">
                <div onClick={() => addToCart(state.id)} className="btn-cart">
                  <span>add to cart</span>
                </div>
              </div>
            )}

            <p className={"product-info"}>{state?.description}</p>
            <p className={"product-info"}>Ingredients: {state?.ingredients}</p>
       
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenedItem;
