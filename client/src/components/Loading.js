import React from "react";
import { VscLoading } from "react-icons/vsc";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <VscLoading />
      <P>Loading...</P>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 69vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  margin-top: 20px;
`;
export default Loading;
