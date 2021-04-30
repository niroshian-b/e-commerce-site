import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

import ProfileHeader from "./Header/ProfileHeader";

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
        <Switch></Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div``;

export default App;
