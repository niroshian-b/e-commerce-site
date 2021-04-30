import React from "react";
import styled from "styled-components";

const Button = ({ text, handleClick, size }) => {
  if (size === "small") {
    return <SmallButton onClick={handleClick}>{text}</SmallButton>;
  } else if (size === "smaller") {
    return <ItemDetailsButton onClick={handleClick}>{text}</ItemDetailsButton>;
  } else {
    return <LargeButton onClick={handleClick}>{text}</LargeButton>;
  }
};

export default Button;

const LargeButton = styled.button`
  background-color: #744fff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  width: 100%;
  cursor: pointer;

  &:hover {
  }
`;

const ItemDetailsButton = styled(LargeButton)`
  padding: 8px 10px;
  font-size: 15px;
  width: 120px;
  margin: 10px;
`;

const SmallButton = styled(LargeButton)`
  padding: 8px 10px;
  font-size: 15px;
  width: 100%;
`;
