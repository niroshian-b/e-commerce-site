import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <ContactUs>Contact Us</ContactUs>
      <Address>
        <p>2300 Hyde Street, Montreal, QC</p>
        <p>H1S 2W1</p>
        <p>(613)-555-0182</p>
      </Address>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--primary-color);
  bottom: 0;
  width: 100%;
  padding: 20px;
`;

const ContactUs = styled.p`
  font-size: 25px;
  color: var(--secondary-color);
  padding-bottom: 10px;
`;

const Address = styled.div`
  color: var(--secondary-color);
  font-size: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default Footer;
