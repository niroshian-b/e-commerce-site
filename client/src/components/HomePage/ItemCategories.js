import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ItemCategories = () => {
  const history = useHistory();

  const pushToCategoryItemsList = (e) => {
    history.push(`/shop/categories/${e.target.innerText}`);
  };

  return (
    <Wrapper>
      <CategoryTitle>Categories</CategoryTitle>
      <CategoryWrapper>
        <Fitness onClick={(e) => pushToCategoryItemsList(e)}>
          <H4>Fitness</H4>
        </Fitness>
        <Gaming onClick={(e) => pushToCategoryItemsList(e)}>
          <H4>Gaming</H4>
        </Gaming>
        <Pets onClick={(e) => pushToCategoryItemsList(e)}>
          <H4>Pets and Animals</H4>
        </Pets>
        <Industrial onClick={(e) => pushToCategoryItemsList(e)}>
          <H4>Industrial</H4>
        </Industrial>
        <Entertainment onClick={(e) => pushToCategoryItemsList(e)}>
          <H4>Entertainment</H4>
        </Entertainment>
        <Lifestyle onClick={(e) => pushToCategoryItemsList(e)}>
          <H4>Lifestyle</H4>
        </Lifestyle>
        <Medical onClick={(e) => pushToCategoryItemsList(e)}>
          <H4>Medical</H4>
        </Medical>
      </CategoryWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const CategoryTitle = styled.h2`
  text-align: center;
  margin: 20px;
  font-size: 40px;
  @media (max-width: 880px) {
    font-size: 30px;
  }
`;
const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 30px;
  margin: 10px;
  @media (max-width: 880px) {
    grid-template-columns: repeat(28, 1fr);
  }
`;

const Medical = styled.div`
  background-image: url(http://diginomica.com/sites/default/files/images/2020-01/medical-tech.jpg);
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px black;
  &:hover {
    transform: scale(0.95);
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
  @media (max-width: 880px) {
    grid-column-start: 1;
    grid-column-end: 14;
    grid-row-start: 1;
    grid-row-end: 4;
  }
`;

const H4 = styled.h4`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const Lifestyle = styled.figure`
  background-image: url(https://techandall.com/wp-content/uploads/2017/03/pexels-photo-129208-1.png);
  background-repeat: no-repeat;
  background-size: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  text-shadow: 1px 1px 2px black;

  &:hover {
    transform: scale(0.95);
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
  @media (max-width: 880px) {
    grid-column-start: 1;
    grid-column-end: 14;
    grid-row-start: 4;
    grid-row-end: 8;
  }
`;
const Entertainment = styled.figure`
  background-image: url(https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/GettyImages-1171377963.jpg);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  text-shadow: 1px 1px 2px black;
  &:hover {
    transform: scale(0.95);
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
  @media (max-width: 880px) {
    grid-column-start: 1;
    grid-column-end: 14;
    grid-row-start: 8;
    grid-row-end: 12;
  }
`;
const Industrial = styled.figure`
  background-image: url(https://euratex.eu/wp-content/uploads/shutterstock_377626975-scaled.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  text-shadow: 1px 1px 2px black;
  &:hover {
    transform: scale(0.95);
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
  @media (max-width: 880px) {
    grid-column-start: 1;
    grid-column-end: 14;
    grid-row-start: 12;
    grid-row-end: 16;
  }
`;
const Pets = styled.figure`
  background-image: url(https://www.design1st.com/wp-content/uploads/2018/03/Pet-Tech-iFetch.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 9;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  text-shadow: 1px 1px 2px black;
  &:hover {
    transform: scale(0.95);
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
  @media (max-width: 880px) {
    grid-column-start: 1;
    grid-column-end: 14;
    grid-row-start: 16;
    grid-row-end: 20;
  }
`;
const Gaming = styled.figure`
  background-image: url(https://latesthackingnews.com/wp-content/uploads/2020/11/2-2.png);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 9;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  text-shadow: 1px 1px 2px black;
  &:hover {
    transform: scale(0.95);
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
  @media (max-width: 880px) {
    grid-column-start: 1;
    grid-column-end: 14;
    grid-row-start: 20;
    grid-row-end: 24;
  }
`;
const Fitness = styled.figure`
  background-image: url(https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2021%2F02%2F12%2FGettyImages-1146442094-2000.jpg&w=426&h=285&c=sc&poi=face&q=85);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  text-shadow: 1px 1px 2px black;

  &:hover {
    transform: scale(0.95);
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 10px darkblue;
  }
  @media (max-width: 880px) {
    grid-column-start: 1;
    grid-column-end: 14;
    grid-row-start: 24;
    grid-row-end: 28;
  }
`;

export default ItemCategories;
