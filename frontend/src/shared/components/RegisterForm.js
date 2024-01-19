import React, { useState } from "react";
import { styled } from "@mui/system";
import InputComponent from "./InputComponent";


function RegisterForm(props) {
  const {
    name,
    setName,
    mail,
    setMail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = props;


  return (
    <>
      <InputComponent
        value={name}
        setValue={setName}
        label="Name"
        type="text"
        placeholder="Enter your Name"
      ></InputComponent>
      <InputComponent
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="email"
        placeholder="Enter Email"
      ></InputComponent>
      <InputComponent
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      ></InputComponent>
      <InputComponent
        value={confirmPassword}
        setValue={setConfirmPassword}
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
      ></InputComponent>
    </>
  );
}

export default RegisterForm;
