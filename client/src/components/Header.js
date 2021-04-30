import React, { useState } from "react";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const [cartQuantity, setCartQuantity] = useState(null);

  const setNumberOfItemsInCart = (quantity) => {
    setCartQuantity(cartQuantity + quantity);
  };

  const pushToCart = () => {
    history.push("/cart");
  };
  return (
    <Wrapper>
      <Logo>
        <GiTechnoHeart />
      </Logo>
      <HeaderItems>
        <Button>Register</Button>
        <Button>Login</Button>
        <UserIcon>
          <FaRegUser />
        </UserIcon>
        <CartIcon>
          <FiShoppingCart onClick={pushToCart} />
        </CartIcon>
      </HeaderItems>
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

const CartIcon = styled.div`
  color: var(--secondary-color);
  cursor: pointer;
  display: flex;
  align-items: center;
`;

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

const HeaderItems = styled.div`
  color: var(--secondary-color);
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const UserIcon = styled(FaRegUser)`
  margin-top: 14px;
  color: var(--secondary-color);
  cursor: pointer;
`;

export default Header;
