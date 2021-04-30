import React from "react";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";

const ProfileHeader = () => {
  return (
    <Wrapper>
      <Logo>
        <GiTechnoHeart />
      </Logo>
      <Profile>
        <Button>Register</Button>
        <Button>Login</Button>
        <UserIcon>
          <FaRegUser />
        </UserIcon>
      </Profile>
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

const Profile = styled.div`
  /* margin-top: 14px; */
  color: var(--secondary-color);
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

const UserIcon = styled(FaRegUser)`
  margin-top: 14px;
  color: var(--secondary-color);
  cursor: pointer;
`;

export default ProfileHeader;
