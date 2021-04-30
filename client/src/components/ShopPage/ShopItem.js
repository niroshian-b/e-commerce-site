import React from "react";
import styled from "styled-components";
import { FiCheck, FiSlash } from "react-icons/fi";

import Button from "../Button";

let iconStyles = {
  color: "green",
  fontSize: "1.6em",
  position: "absolute",
  bottom: "0",
};

const ShopItem = ({
  name,
  price,
  bodyLocation,
  category,
  imageSrc,
  numInStock,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Img src={imageSrc} alt={name} />
      </ImageWrapper>
      <NamePriceWrapper>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </NamePriceWrapper>
      {Number(numInStock) === 0 ? (
        <StockWrapper>
          <FiSlash style={iconStyles} /> <Stock>Out of Stock</Stock>
        </StockWrapper>
      ) : (
        <StockWrapper>
          <FiCheck style={iconStyles} /> <Stock>{numInStock} In Stock</Stock>
        </StockWrapper>
      )}
      <Button text="Add to Cart" size="small" />
    </Wrapper>
  );
};

export default ShopItem;

const Wrapper = styled.div`
  max-width: 330px;
  padding: 16px;
  background: #fff;
  text-align: left;

  &:hover {
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 200px;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
`;

const NamePriceWrapper = styled.div`
  padding-top: 20px;
  display: block;
  height: 130px;
`;

const Name = styled.div`
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 10px;
  overflow: hidden;
  color: #6c757d;
`;

const Price = styled.div`
  font-weight: bolder;
  font-size: 28px;
`;

const StockWrapper = styled.div`
  padding-top: 20px;
  display: block;
  margin: 0 0 20px 0;
  position: relative;
`;

const Stock = styled.span`
  font-weight: 900;
  font-size: 17px;
  margin: 0 0 0 28px;
`;
