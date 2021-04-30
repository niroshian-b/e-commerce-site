import React from "react";
import styled from "styled-components";

const UserForm = () => {
  const handleSubmit = () => {};
  return (
    <>
      <h1>Customer Information</h1>
      <Form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <h2>Name</h2>
        <InputContainer>
          <Label htmlFor="firstName">First Name: </Label>
          <Input type="text" name="firstName" required></Input>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="lastName">Last Name: </Label>
          <Input type="text" name="lastName" required></Input>
        </InputContainer>
        <h2>Address</h2>
        <AddressContainer>
          <div>
            <Label htmlFor="address1">Shipping line 1: </Label>
            <Input type="text" name="address1" required></Input>
          </div>
          <div>
            <Label htmlFor="address2">Shipping line 2: </Label>
            <Input type="text" name="address2"></Input>
          </div>
        </AddressContainer>
        <h2>Contact Information</h2>
        <InputContainer>
          <Label htmlFor="email">Email: </Label>
          <Input type="text" name="email" required></Input>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="phoneNumber">Phone number: </Label>
          <Input type="text" name="phoneNumber" required></Input>
        </InputContainer>
        <Button type="Submit">Purchase</Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  margin: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 75%;
`;

const InputContainer = styled.div`
  margin: 5px 0;
  min-width: 300px;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  line-height: 1.5;
  padding: 3px;
`;

const AddressContainer = styled(InputContainer)``;

const Button = styled.button``;

export default UserForm;
