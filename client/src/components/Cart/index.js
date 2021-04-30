import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Item from "./Item";
import UserForm from "./UserForm";

import { getCartTotal } from "../../reducers/cart-reducer";
import { clearCart } from "../../actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return Object.values(state.cart);
  });

  let QtyTotal = useSelector(getCartTotal);
  let PriceTotal = 0;

  return (
    <Wrapper>
      <ShoppingCart>
        <ItemsList>
          {cart.map((item) => {
            const price = Number(item.price.substring(1));
            PriceTotal += item.quantity * price;
            return <Item key={item.name} item={item} />;
          })}
        </ItemsList>
        <TotalInfoSpot />
        <Total>
          <ClearBtn onClick={() => dispatch(clearCart())}>Clear Cart</ClearBtn>
          <TotalInfo>
            <div>
              Total Items: <span>{QtyTotal}</span>
            </div>
            <div>
              Subtotal: <span>{Math.round(PriceTotal * 100) / 100}</span>
            </div>
          </TotalInfo>
        </Total>
      </ShoppingCart>
      <FormWrapper>
        <UserForm />
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const ShoppingCart = styled.div`
  width: calc(100% / 3 * 2);
  padding: 10px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ItemsList = styled.ul``;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: calc(100% / 3 * 2);
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--primary-color);
`;

const TotalInfoSpot = styled.div`
  //adds white space for TotalInfo to fit at the end of the item list
  height: 100px;
`;

const ClearBtn = styled.button`
  margin-left: 50px;
  height: 50px;
  width: 120px;
  font-size: 20px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 3px solid var(--secondary-color);
  border-radius: 5px;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  @media (max-width: 425px) {
    margin-left: 20px;
    font-size: 15px;
    width: 100px;
    height: 40px;
  }
`;

const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--secondary-color);
  font-size: 25px;
  line-height: 1.5;
  padding-right: 50px;

  @media (max-width: 425px) {
    font-size: 15px;
    padding-right: 20px;
  }
`;

const FormWrapper = styled.div`
  height: 100vh;
  width: calc(100% / 3);
  border-left: solid lightgray 1px;
  padding: 10px;
  position: fixed;
  top: 50px;
  right: 0;
`;

export default Cart;
