import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

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

        <Switch>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div``;

export default App;
