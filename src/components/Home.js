import React from "react";
import Slider from "./Slider";
import GeneralCatalog from "./catalog/GeneralCatalog";
import "../App.css";
function Home() {
  return (
    <>
      <div className={"home-container"}>
        <Slider />
        <div className={"greeting"}>What would you like, tea or coffee?</div>
        <GeneralCatalog />
      </div>
      <div className={"strip-quote"}><span>Your Number One Store</span></div>
    </>
  );
}

export default Home;
