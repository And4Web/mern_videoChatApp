import React from 'react'
import { styled } from '@mui/system';
import InputComponent from './InputComponent';
import CustomButton from './CustomButton';

const FormWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});
function LoginForm({mail, setMail, password, setPassword, isFormValid, handleLogin}) {

  return (
    <FormWrapper>     
     <InputComponent value={mail} setValue={setMail} label="E-mail" type="text" placeholder="Enter Email"></InputComponent>
     
     <InputComponent value={password} setValue={setPassword} label="Pasword" type="password" placeholder="Enter Password"></InputComponent>

     <CustomButton label="Login" additionalStyles={{marginTop: "30px"}} disabled={!isFormValid} onClick={handleLogin}></CustomButton>
    </FormWrapper>
  )
}

export default LoginForm;