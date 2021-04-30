import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

import HomePage from "./HomePage/index";

import Header from "./Header";

import ShopPage from "./ShopPage";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import Cart from "./Cart";

import ItemDetails from "./ItemDetails";

const App = () => {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Wrapper>
        {/* <ProfileHeader /> */}
        {/* {window.location.pathname.includes("/shop") && <Sidebar />} */}
        <Header />
        <Switch>
          <Route exact path to="/">
            <HomePage></HomePage>
          </Route>


 
         <Route
            path={[
              "/shop/categories/:category",
              "/shop/companies/:companyId",
              "/shop/bodylocation/:bodylocation",
            ]}
            component={ShopPage}
          />
          <Route path="/cart">
            <Cart />
          </Route>
    <Route path="/item/:id">
            <ItemDetails />
          </Route>
        </Switch>
        {window.location.pathname !== "/cart" && <Footer />}

      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div``;

export default App;
