import React, { useState } from "react";
import CatalogCard from "./CatalogCard";
import { Link } from "react-router-dom";
import "../style/catalog.css";

function CatalogGroup({ products }) {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const [filterParam, setFilterParam] = useState("all");
    // console.log(products.some(i => i.section === 'tea'));


  function search(products) {
    return products.filter((item) => {
      if (item.subsection === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "all") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
      //  what should i return ?
      return "";
    });
  }

  return (
    <>
      <div className={"collection"}>
        <div className={"collection-sidebar"}>
          <div className={"collection-sidebar__search"}>
            <input
              type="text"
              placeholder="Search..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <select className={"collection-sidebar__select"}
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
          >
          {products.some(i => i.section === 'tea')?
          <>
           <option value="all">all</option>
            <option value="green">green</option>
            <option value="black">black</option>
            <option value="herb">herb</option></>:
             <>
             <option value="all">all</option>
              <option value="decaff">decaff coffee</option>
              <option value="bean">bean</option>
              <option value="cold-brew">cold brew coffee</option>
              <option value="green">green coffee</option></>}
          </select>
          
        </div>
        <div className={"collection-cards"}>
          {search(products).map((item) => (
            <Link
              key={item.id + item.name}
              to={{ pathname: "/productinfo/" + item.id, propsSearch: item }}
            >
              <CatalogCard item={item} />
            </Link>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default CatalogGroup;
