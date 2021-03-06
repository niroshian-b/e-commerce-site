import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

import HomePage from "./HomePage/index";

import Header from "./Header";

import ShopPage from "./ShopPage";
import Footer from "./Footer";

import Cart from "./Cart";
import Error from "./Error";
import Success from "./Cart/Success";
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
        <Header />
        <Switch>
          <Route exact path="/">
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
          <Route path="/cart/view">
            <Cart />
          </Route>
          <Route path="/cart/success">
            <Success />
          </Route>
          <Route path="/item/:id">
            <ItemDetails />
          </Route>
          <Route path={["/error", ""]}>
            <Error />
          </Route>
        </Switch>

        {window.location.pathname !== "/cart" && <Footer />}
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div``;

export default App;
