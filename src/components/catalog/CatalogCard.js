import React from 'react';
import '../style/catalog.css';


function CatalogCard({item}){
    return (
        <div className={"product-card"}>
          <div className={"product-card__image"}>
            <img src={item.imgSrc} alt='product'></img>
          </div>
          <div className={"product-card__name"}>{item.name}</div>
          <div>{item.type}</div>
        </div>

      );
}

export default CatalogCard;