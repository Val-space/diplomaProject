import React from "react";
import CatalogGroup from "./CatalogGroup";
import AccordionQuest from "../AccordionQuest";
import Rewiews from "../rewiews/Rewiews";

import "../style/catalog.css";

function CoffeeCatalog({ products }) {
  return (
    <>
    <div className={"banner-coffee banner"}>
        <div className={"parralax-inner"}></div>
      </div>
      <div> 
        <div className={"collection_container"}>
          <div className={"collection_title"}>here is a lot of coffee</div>
          <CatalogGroup products={products} />
          <AccordionQuest />
          <Rewiews />
        </div>
      </div>
    </>
  );
}

export default CoffeeCatalog;
