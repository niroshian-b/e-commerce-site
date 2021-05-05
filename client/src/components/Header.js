import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { getCartTotal } from "../reducers/cart-reducer";

const Header = () => {
  const history = useHistory();

  const cartQuantity = useSelector(getCartTotal);
  return (
    <Wrapper>
      <Logo onClick={() => history.push("/")}>
        <LogoImage /> Tech Ninja
      </Logo>
      <NavItems>
        <Button>Register</Button>
        <Button>Login</Button>

        <UserIcon>
          <FaRegUser />
        </UserIcon>
        <IconLink to="/cart/view">
          <FiShoppingCart />
          <CartQuantity>{cartQuantity}</CartQuantity>
        </IconLink>
      </NavItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 50px;
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
  font-size: 2rem;
  cursor: pointer;
`;

const LogoImage = styled(GiTechnoHeart)`
  margin-right: 10px;
`;

const CartLogoWrapper = styled.span`
  display: flex;
  cursor: pointer;
  margin: 0px 10px;
`;

const CartQuantity = styled.div`
  position: absolute;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  min-height: 15px;
  width: 15px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  top: 30px;
  right: 35px;
  font-size: 0.75rem;
`;
const Button = styled.button`
  background: var(--primary-color);
  color: var(--secondary-color);
  outline: none;
  border: none;
  cursor: pointer;
  border-bottom: 2px solid var(--primary-color);
  font-size: 1rem;
  &:hover {
    border-bottom: 2px solid var(--secondary-color);
    transition: 0.3s;
  }
`;

const NavItems = styled.div`
  color: var(--secondary-color);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 225px;
`;

const UserIcon = styled(FaRegUser)`
  color: var(--secondary-color);
  cursor: pointer;
`;

const IconLink = styled(Link)`
  width: 22px;
  height: 22px;
  color: var(--secondary-color);
  text-decoration: none;
`;

export default Header;
