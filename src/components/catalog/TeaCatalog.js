import React from "react";
import CatalogGroup from "./CatalogGroup";
import "../style/catalog.css";
import Rewiews from "../rewiews/Rewiews";

function TeaCatalog({ products }) {
  return (
    <>
      <div className={"banner-tea banner"}>
        <h5> LOOSE LEAF TEA</h5>
        <div>BLENDS WITH COMPLEX CHARACTER</div>
      </div>
      <div className={"collection_container"}>
        <div className={"collection_title"}>here is a lot of tea</div>
        <CatalogGroup products={products} />
        <div className={"collection__tea-descr"}>
        <p >
          All tea, whether it be green, black, white or oolong, comes from the
          same plant, the evergreen shrub Camellia Sinensis. As blenders, the
          method of harvesting and treatment contribute to each tea’s
          distinctive signature. At TEALEAVES, only the best teas are picked
          entirely by hand, and only the bud and top one or two leaves are
          plucked. Once picked, our leaves are dealt with differently depending
          on the type of tea desired. Oxidization (also know as the Fermentation
          Process) is the underlying process that gives green, black, and oolong
          teas their individual characteristics.
        </p>
        </div>
       
        <Rewiews />
      </div>
    </>
  );
}

export default TeaCatalog;
