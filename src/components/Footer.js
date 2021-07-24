import React from "react";
import { Link } from "react-router-dom";
import "./style/footer.css";
function Footer() {
  return (
    <>
      <div className={"footer"}>
        <div className={"footer-inner"}>
          <div className={"footer-inner__column"}>
            <div className={"footer-inner__maintitle"}>Get to know us better</div>
            <nav>
              <li className={"footer-inner__column-element"}><Link to='./about'>About</Link></li>
              <li className={"footer-inner__column-element"}>Blog</li>
            </nav>
            <div className={"footer-inner__column-element"}> Customer service: 123-456-7890</div>
          </div>
          <div className={"footer-inner__column"}>
            <div className={"footer-inner__column-title"}>Help</div>
            <div className={"footer-inner__column-element"}>Shipping</div>
            <div className={"footer-inner__column-element"}>Payment Methods</div>
            <div className={"footer-inner__column-element"}>Pinterest</div>
          </div>
          <div className={"footer-inner__column"}>
            <div className={"footer-inner__column-title"}>Follow Us</div>
            
            <div className={"footer-inner__column-element"}><a href='https://www.facebook.com/'>Facebook</a></div>
            <div className={"footer-inner__column-element"}><a href='https://www.instagram.com/'>Instagran</a></div>
            <div className={"footer-inner__column-element"}><a href='https://www.pinterest.com/'>Pinterest</a></div>
          </div>
        </div>
        <div className={"footer-underline"}></div>
        <div className={"footer-policy"}>© 2021 TEA@COFFEE.COM. ALL RIGHTS RESERVED</div>
      </div>
    </>
  );
}
export default Footer;
