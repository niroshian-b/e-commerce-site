import React, { useState } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const CartHeader = () => {
  const [cartQuantity, setCartQuantity] = useState(null);
  const setNumberOfItemsInCart = (quantity) => {
    setCartQuantity(cartQuantity + quantity);
  };
  return (
    <Wrapper>
      <CartIcon>
        <FiShoppingCart />
        <CartQuantity>{cartQuantity}</CartQuantity>
        {/* <button onClick={() => setNumberOfItemsInCart(1)}>test</button> */}
      </CartIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50px;
  background: var(--primary-color);
  display: flex;
  padding: 0 40px;
`;
const CartIcon = styled.div`
  color: var(--secondary-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: auto 0 auto auto;
  font-size: 20px;
`;
const CartQuantity = styled.div`
  margin-left: 5px;
`;
export default CartHeader;
