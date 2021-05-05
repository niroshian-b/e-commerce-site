import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";

import { updateQtyInCart, removeItem } from "../../actions";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Container>
        <Img src={item.imageSrc} alt={item.name} />
        <div>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}</ItemPrice>
        </div>
      </Container>
      <RightContainer>
        <RemoveButton
          onClick={() => {
            dispatch(removeItem(item));
          }}
        />
        <div>
          <Label htmlFor="qty">Qty: </Label>
          <Quantity
            id="qty"
            name="qty"
            type="number"
            defaultValue={item.quantity}
            min="1"
            max={item.numInStock}
            onChange={(e) => {
              dispatch(updateQtyInCart(item, Number(e.target.value)));
            }}
          ></Quantity>
        </div>
        <TotalItemPrice>
          Subtotal:{" "}
          <span>
            {Math.round(item.quantity * Number(item.price.substring(1)) * 100) /
              100}
          </span>
        </TotalItemPrice>
      </RightContainer>
    </Wrapper>
  );
};

export default Item;
const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  margin: 5px 20px;
  padding: 10px;
  border: 1px solid lightgray;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled(Container)`
  flex-direction: column;
  align-items: flex-end;
`;

const RemoveButton = styled(FiX)`
  border: none;
  background-color: transparent;
  width: 25px;
  min-height: 25px;
  color: gray;
  margin: 5px 0;
`;

const Img = styled.img`
  min-height: 75px;
  width: 75px;
  vertical-align: middle;
`;

const ItemName = styled.p`
  font-size: 1.25rem;
  max-width: 340px;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const ItemPrice = styled(ItemName)``;

const Label = styled.label``;

const Quantity = styled.input`
  width: 3rem;
`;

const TotalItemPrice = styled.p`
  text-align: right;
`;
