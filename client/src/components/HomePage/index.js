import React from "react";
import styled from "styled-components";
import ItemCategories from "./ItemCategories";

const HomePage = () => {
  return (
    <Wrapper>
      <BackgroundImage>
        <CompanyName>Tech Ninja</CompanyName>
      </BackgroundImage>
      <ItemCategories></ItemCategories>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: baseline;
  background-image: url(https://www.globalblue.com/destinations/uk/london/article830241.ece/BINARY/tech-gadgets-gift-guide-2018-teaser-01b.jpg);
  @media (max-width: 880px) {
    height: 25vh;
  } ;
`;

const Test = styled.div``;

const CompanyName = styled.h1`
  font-size: 100px;
  color: var(--primary-color);
  text-align: center;
  vertical-align: middle;
  text-shadow: 1px 1px 2px white;
  @media (max-width: 880px) {
    font-size: 40px;
    color: purple;
  }
`;
export default HomePage;
