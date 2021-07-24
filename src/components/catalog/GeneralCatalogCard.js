import React from "react";
import "../style/catalog.css";
import { Link } from "react-router-dom";



function GeneralCatalogCard({ text, imgLink,textLink}) {
  return (
    <>
      <div className={"general-catalog__item"}>
        <Link to={"/catalog/"+ textLink}>
          <img
            className={"general-catalog__coffee"}
            src={imgLink}
            alt={"product"}
          ></img>
          <div className={"general-catalog__name"}>{text}</div>
        </Link>
      </div>
    </>
  );
}
export default GeneralCatalogCard;
