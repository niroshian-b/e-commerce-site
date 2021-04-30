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
  overflow: scroll;
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

const ClearBtn = styled.button`
  margin-left: 50px;
  height: 50px;
  width: 120px;
  font-size: 20px;
  background-color: var(--primary-color);
  color: white;
  border: 3px solid white;
  border-radius: 5px;

  &:hover {
    background-color: white;
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
  color: white;
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
  position: sticky;
  position: -webkit-sticky;
  top: 5px;
`;

export default Cart;

//SAMPLE ITEM MUST DELETE AFTER IMPORTING ITEM AS PROP
const item = {
  name: "Garmin Vivofit Fitness Band, Blue",
  price: "$129.99",
  body_location: "Wrist",
  category: "Fitness",
  _id: 6739,
  imageSrc:
    "data:image/jpeg;base64,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",
  numInStock: 5,
  companyId: 10713,
};
