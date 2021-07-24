import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/cart/Cart";
import AboutUs from "./components/AboutUs";
import OpenedItem from "./components/catalog/OpenedItem";
import FormExample from "./components/FormExample";
import CoffeeCatalog from "./components/catalog/CoffeeCatalog";
import TeaCatalog from "./components/catalog/TeaCatalog";
import Explore from "./components/Explore";
import CreditCardForm from './components/creditcard/CreditCardForm';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ApiCatalogTea } from "./components/apiProducts";
import { ApiCatalogCoffee } from "./components/apiProducts";

import { LocationContext } from "./components/Context";


function App() {
  const [teaProducts, setTeaProducts] = useState([]);
  const [coffeeProducts, setCoffeeProducts] = useState([]);

  const cartLocalStorage = JSON.parse(localStorage.getItem('cart' || '[]'))
  const [cart, setCart] = useState(cartLocalStorage);


  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

  //Context ////////////////////
  const [location, setLocation] = useState({
    country: "",
    city: "",
  });
  const ChangeLocation = (country) => {
    setLocation({ ...location, country: country, city: "" });
  };
  const changeCity = (city) => {
    setLocation({ ...location, city: city });
  };
  // ///////////////////////

  useEffect(() => {
    ApiCatalogTea().then((data) => setTeaProducts(data));
  }, []);

  useEffect(() => {
    ApiCatalogCoffee().then((data) => setCoffeeProducts(data));
  }, []);

  const allProducts = [...teaProducts, ...coffeeProducts];

  // CART
  const addToCart = (id) => {
    let addedItem = allProducts.filter((i) => i.id === id)[0];
    setCart([...cart, { cartItem: addedItem, id, count: 1 }]);
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };
  const changeQuantity = (id, count) => {
    setCart(cart.map((el) => (el.id === id ? { ...el, count } : el)));
  };



  return (
    <>
      <div className={"App"}>
        <div className={"app-main"}>
        <Router>
          <LocationContext.Provider value={{ location, setLocation }}>
            <Header
              cart={cart}
              ChangeLocation={ChangeLocation}
              changeCity={changeCity}
            />
             <Route path="/checkout">
          <CreditCardForm />
        </Route>
            <Route path="/cart">
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                changeQuantity={changeQuantity}
              />
            </Route>
          </LocationContext.Provider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/form">
              <FormExample />
            </Route>

            <Route path="/catalog/tea">
              <TeaCatalog products={teaProducts} />
            </Route>
            <Route path="/catalog/coffee">
              <CoffeeCatalog products={coffeeProducts} />
            </Route>

            <Route path="/productinfo/:id">
              <OpenedItem
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
                allProducts={allProducts}
              />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
          </Switch>
          <Footer />

        </Router>
        </div>
      </div>
    </>
  );
}

export default App;
