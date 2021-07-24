import React from "react";
import GeneralCatalogCard from "./GeneralCatalogCard";
import "../style/catalog.css";

import imgGreenCoffeeSrc from "../../images/catalog/green-coffee.jpeg";



function GeneralCatalog() {


  
  const catalogSection = [
    {
      id:1,
      text: "Coffee",
      imgLink: imgGreenCoffeeSrc,
      textLink:'coffee'
    },
    {
      id:2,
      text: "Tea",
      imgLink: 'https://cdn.pixabay.com/photo/2016/11/29/13/04/tea-1869716_1280.jpg',
      textLink:'tea'
    },
  ];

  return (
    <>
      <div id="products" className={"general-catalog"}>
        {catalogSection.map((item) => (
          <GeneralCatalogCard key={item.id} text={item.text} imgLink={item.imgLink} textLink={item.textLink} />
        ))}
      </div>
    </>
  );
}
export default GeneralCatalog;
