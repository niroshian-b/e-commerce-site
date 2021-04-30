import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";

import { getCartTotal } from "../reducers/cart-reducer";

const Header = () => {
  const cartQuantity = useSelector(getCartTotal);
  return (
    <Wrapper>
      <Logo>
        <GiTechnoHeart />
      </Logo>
      <NavItems>
        <Button>Register</Button>
        <Button>Login</Button>
        <FaRegUser />
        <FiShoppingCart />
        <CartQuantity>{cartQuantity}</CartQuantity>
      </NavItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50px;
  background: var(--primary-color);
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 30px;
`;

const CartQuantity = styled.div``;
const Button = styled.button`
  background: var(--primary-color);
  color: var(--secondary-color);
  outline: none;
  border: none;
  cursor: pointer;
  border-bottom: 2px solid var(--primary-color);
  font-size: 17px;
  &:hover {
    border-bottom: 2px solid var(--secondary-color);
    transition: 0.3s;
  }
`;

const NavItems = styled.div`
  color: var(--secondary-color);
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

const UserIcon = styled(FaRegUser)`
  margin-top: 14px;
  color: var(--secondary-color);
  cursor: pointer;
`;

export default Header;
