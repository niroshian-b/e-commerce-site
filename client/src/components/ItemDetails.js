import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Button from "./Button";

const ItemDetails = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const [companyId, setCompanyId] = useState(0);

  const [companyName, setCompanyName] = useState([]);

  const [quantitySelected, setQuantitySelected] = useState(1);

  useEffect(() => {
    fetch(`/items/item/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setItem(result.data);
        setCompanyId(result.data.companyId);
        console.log(result.data);
      });
  }, [id]);

  useEffect(() => {
    if (companyId) {
      fetch(`/companies/company/${companyId}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result, "result");
          setCompanyName(result.data);
        });
    }
  }, [companyId]);

  const addQuantity = () => {
    setQuantitySelected(quantitySelected + 1);
  };

  const reduceQuantity = () => {
    if (quantitySelected > 1) {
      setQuantitySelected(quantitySelected - 1);
    }
  };

  return (
    <Wrapper>
      <ItemImageWrapper>
        <ItemImage src={item.imageSrc} />
      </ItemImageWrapper>
      <ItemDetailsWrapper>
        <ItemName>{item.name}</ItemName>
        <Filters>
          <Category>{item.category}</Category>
          <BodyLocation>{item.body_location}</BodyLocation>
          <CompanyName>{companyName.name}</CompanyName>
        </Filters>
        <Price> {item.price}</Price>
        <NumInStock>In stock: {item.numInStock}</NumInStock>
        <QuantitySelectorWrapper>
          <AiOutlineMinus onClick={reduceQuantity} />
          <QuantitySelected>{quantitySelected}</QuantitySelected>
          <AiOutlinePlus onClick={addQuantity} />
        </QuantitySelectorWrapper>
        <Button size={"smaller"} text={"Add To Cart"} />
      </ItemDetailsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;

  flex: 100%;
`;
const ItemImageWrapper = styled.div`
  border: 2px solid lightgrey;
  flex: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const ItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 60%;
`;
const ItemImage = styled.img`
  width: auto;
  height: 100%;
`;
const ItemName = styled.h1`
  text-align: center;
  font-size: 25px;
  margin: 5px;

  width: 500px;
`;
const Category = styled.h3`
  margin: 0px 10px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
const BodyLocation = styled.h3`
  margin: 0px 10px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
const CompanyName = styled.h3`
  margin: 0px 10px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
const Filters = styled.div`
  display: flex;
  margin: 5px;
`;
const QuantitySelectorWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.p`
  margin: 5px;
`;
const NumInStock = styled.p`
  margin: 5px;
`;
const QuantitySelected = styled.span`
  user-select: none;
  margin: 5px;
`;
export default ItemDetails;
