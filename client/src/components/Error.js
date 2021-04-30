import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "./Button";

const Error = () => {
  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <ErrorWrapper>
        <Title>An unknown error has occured.</Title>
        <Message>
          <strong>
            Please try refreshing the page, or contact support at:
          </strong>
          <p>support@techninja.com</p>
          <p>(613)-555-0182</p>
        </Message>
        <Button handleClick={handleBackButton} text="Go Back" />
      </ErrorWrapper>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  background-color: #f0f2f5;
  padding-bottom: 300px;
  display: flex;
  justify-content: center;
`;

const ErrorWrapper = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 200px;
  width: 50%;
  padding: 10px 15px 15px 15px;
`;

const Img = styled.img`
  height: auto;
  width: 110px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 25px 0 0 0;
`;

const Message = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 25px 0 25px 0;
  line-height: 2;
`;
