import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import CartHeader from "./Header/CartHeader";
import HomePage from "./HomePage/index";

import ProfileHeader from "./Header/ProfileHeader";

import ShopPage from "./ShopPage";

import Footer from "./Footer";

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
        <ProfileHeader />
        <CartHeader />
        <Switch>
          <Route exact path to="/">
            <HomePage></HomePage>
          </Route>
        </Switch>

        <Switch>
          <Route
            path={[
              "/shop/categories/:category",
              "/shop/companies/:companyId",
              "/shop/bodylocation/:bodylocation",
            ]}
            component={ShopPage}
          />
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div``;

export default App;
