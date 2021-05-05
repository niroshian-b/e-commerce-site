import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const orderDetails = location.state;

  return (
    <Wrapper>
      <Response>
        <p>Thank you for purchasing from us {orderDetails.firstName}.</p>
        <p>
          A order confirmation will be sent to {orderDetails.email} when your
          order is ready!
        </p>
      </Response>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 180px);
  text-align: center;
`;

const Response = styled.div`
  padding-top: 40px;
`;

export default Success;
