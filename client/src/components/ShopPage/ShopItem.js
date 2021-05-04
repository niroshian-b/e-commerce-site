import React from "react";
import styled from "styled-components";
import { FiCheck, FiSlash } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { addToCart } from "../../actions";
import Button from "../Button";
import { useHistory } from "react-router-dom";

let inStockIconStyles = {
  color: "green",
  fontSize: "1.6em",
  position: "absolute",
  bottom: "0",
};

let outOfStockIconStyles = {
  color: "red",
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
  _id,
}) => {
  const history = useHistory();
  let iconStyles = {
    color: "green",
    fontSize: "1.6em",
    position: "absolute",
    bottom: "0",
  };

  const dispatch = useDispatch();
  const item = {
    name,
    price,
    bodyLocation,
    category,
    imageSrc,
    numInStock,
    _id,
  };

  const pushToItemDetails = () => {
    history.push(`/item/${_id}`);
  };
  return (
    <Wrapper>
      <ItemLink onClick={() => pushToItemDetails()}>
        <ImageWrapper>
          <Img src={imageSrc} alt={name} />
        </ImageWrapper>
        <NamePriceWrapper>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </NamePriceWrapper>
        {Number(numInStock) === 0 ? (
          <StockWrapper>
            <FiSlash style={outOfStockIconStyles} /> <Stock>Out of Stock</Stock>
          </StockWrapper>
        ) : (
          <StockWrapper>
            <FiCheck style={inStockIconStyles} />{" "}
            <Stock>{numInStock} In Stock</Stock>
          </StockWrapper>
        )}
      </ItemLink>
      <Button
        text="Add to Cart"
        size="small"
        numInStock={numInStock}
        handleClick={() => {
          dispatch(addToCart(item));
        }}
      />
    </Wrapper>
  );
};

export default ShopItem;

const Wrapper = styled.div`
  max-width: 330px;
  padding: 16px;
  background: #fff;
  text-align: left;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const ItemLink = styled.div`
  &:hover {
    cursor: pointer;
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
  padding-bottom: 10px;
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
