import React from "react";
import ModalRegistration from "../components/ModalRegistration";
import Location from "./Location";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"; 

import { Link } from "react-router-dom";


import "./style/header.css";

function Header({ cart, ChangeLocation, changeCity }) {
  const isCartNotEmpty = cart.map((el) => el.count).length;
  return (
    <>
      <div className={"head-info"}>free shipping for orders 90$ and over</div>

      <div className={"header-wrapper"}>
        <div className={"header"}>
          <nav className={"header__menu"}>
            <Link to="/about">
              <li className={"menu-link"}></li>About us
            </Link>
            <Link to="/explore">
              <li className={"menu-link"}>Explore</li>
            </Link>
            <Link to="/catalog/coffee">
              <li className={"menu-link"}>Our coffee</li>
            </Link>
            <Link to="/catalog/tea">
              <li className={"menu-link"}>Our tea</li>
            </Link>
          
          </nav>

          <Link to="/" className={"header__storeName"}>
            <h2>FULL CUP</h2>
          </Link>

          <div className={"header__icons"}>
            <ModalRegistration />
            <div className={"menu-icons"}>
              <Link to="/cart" className={"menu-cart"}>
                <FontAwesomeIcon className={"menu-icon"} icon={faShoppingBag} />
                {isCartNotEmpty ? <span className={"cart-dot"}></span> : ""}
              </Link>
            </div>
            <div className={"menu-location"}>
              <Location
                ChangeLocation={ChangeLocation}
                changeCity={changeCity}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
