import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../actions";

const UserForm = () => {
  const dispatch = useDispatch();
  const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    phoneNumber: "",
  };

  const cart = useSelector((state) => {
    return Object.values(state.cart);
  });

  const [formData, setFormData] = useState(initialUserState);

  const history = useHistory();

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const order = {
      ...formData,
      cart,
    };

    fetch("/order/submit", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const { status, error } = json;
        if (status === "success") {
          dispatch(clearCart());
          history.push({
            pathname: "/cart/success",
            state: order,
          });
        } else {
          history.push("/error");
          console.log(error);
        }
      });
  };

  return (
    <>
      <h1>Customer Information</h1>
      <Form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <h2>Name</h2>
        <InputContainer>
          <Label htmlFor="firstName">First Name: </Label>
          <Input
            type="text"
            name="firstName"
            onChange={(ev) => handleChange(ev.target.value, ev.target.name)}
            required
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="lastName">Last Name: </Label>
          <Input
            type="text"
            name="lastName"
            onChange={(ev) => handleChange(ev.target.value, ev.target.name)}
            required
          ></Input>
        </InputContainer>
        <H2>Address</H2>
        <AddressContainer>
          <Label htmlFor="address1">Shipping line 1: </Label>
          <Input
            type="text"
            name="address1"
            onChange={(ev) => handleChange(ev.target.value, ev.target.name)}
            required
          ></Input>
        </AddressContainer>
        <AddressContainer>
          <Label htmlFor="address2">Shipping line 2: </Label>
          <Input
            type="text"
            name="address2"
            onChange={(ev) => handleChange(ev.target.value, ev.target.name)}
          ></Input>
        </AddressContainer>
        <H2>Contact Information</H2>
        <InputContainer>
          <Label htmlFor="email">Email: </Label>
          <Input
            type="text"
            name="email"
            onChange={(ev) => handleChange(ev.target.value, ev.target.name)}
            required
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="phoneNumber">Phone number: </Label>
          <Input
            type="text"
            name="phoneNumber"
            onChange={(ev) => handleChange(ev.target.value, ev.target.name)}
            required
          ></Input>
        </InputContainer>{" "}
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
const H2 = styled.h2`
  margin-top: 40px;
`;
const AddressContainer = styled(InputContainer)``;

const Button = styled.button`
  margin: 15px;
  height: 70px;
  width: calc(100% / 3 - 15px);
  position: fixed;
  bottom: 0;
  font-size: 30px;
  right: -7.5px;
  background-color: var(--tertiary-color);
  color: var(--secondary-color);
  border-radius: 5px;
  border: 3px solid var(--primary-color);

  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;

export default UserForm;
