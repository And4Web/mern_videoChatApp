import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Tooltip } from "@mui/material";
import InputComponent from "./InputComponent";
import CustomButton from "./CustomButton";
import RedirectInfo from "./RedirectInfo";

const FormWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const getFormValid = () => {
  return "Press to Log in";
};
const getFormNotValid = () => {
  return "Enter correct Email and Password";
};

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  isFormValid,
  handleLogin,
}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/register");
  };
  
  return (
    <FormWrapper>
      <InputComponent
        value={email}
        setValue={setEmail}
        label="E-mail"
        type="text"
        placeholder="Enter Email"
      ></InputComponent>

      <InputComponent
        value={password}
        setValue={setPassword}
        label="Pasword"
        type="password"
        placeholder="Enter Password"
      ></InputComponent>

      <Tooltip title={isFormValid ? getFormValid() : getFormNotValid()}>
        <div>
          <CustomButton
            label="Login"
            additionalStyles={{
              marginTop: "30px",
              width: "23.5rem",
              height: "2.5rem",
            }}
            disabled={!isFormValid}
            onClick={handleLogin}
          ></CustomButton>
        </div>
      </Tooltip>

      <RedirectInfo
        text="Don't have an account yet? "
        redirectText="Register here"
        handleRedirect={handleRedirect}
        additionalStyles={{ margin: "1rem" }}
      />
    </FormWrapper>
  );
}

export default LoginForm;
