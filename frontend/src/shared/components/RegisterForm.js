import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Tooltip } from "@mui/material";
import InputComponent from "./InputComponent";
import CustomButton from "./CustomButton";
import RedirectInfo from "./RedirectInfo";

const getFormValid = () => {
  return "Press for a new registration";
};
const getFormNotValid = () => {
  return "Enter all the fields correctly";
};

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
    isFormValid,
    handleRegister,
  } = props;

  const FormWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <FormWrapper>
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

      <Tooltip title={isFormValid ? getFormValid() : getFormNotValid()}>
        <div>
          <CustomButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          ></CustomButton>
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an account? "
        redirectText="Login here"
        handleRedirect={handleRedirect}
        additionalStyles={{ margin: "1rem" }}
      />
    </FormWrapper>
  );
}

export default RegisterForm;