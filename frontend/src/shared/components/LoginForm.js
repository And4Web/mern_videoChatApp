import React from 'react'
import {useNavigate} from 'react-router-dom'
import { styled } from '@mui/system';
import InputComponent from './InputComponent';
import CustomButton from './CustomButton'; 
import RedirectInfo from './RedirectInfo';

const FormWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

function LoginForm({mail, setMail, password, setPassword, isFormValid, handleLogin}) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/register");
  }
  return (
    <FormWrapper>     
     <InputComponent value={mail} setValue={setMail} label="E-mail" type="text" placeholder="Enter Email"></InputComponent>
     
     <InputComponent value={password} setValue={setPassword} label="Pasword" type="password" placeholder="Enter Password"></InputComponent>

     <CustomButton label="Login" additionalStyles={{marginTop: "30px"}} disabled={!isFormValid} onClick={handleLogin}></CustomButton>

     <RedirectInfo text="Don't have an account yet? " redirectText="Register here" handleRedirect={handleRedirect} additionalStyles={{margin: "1rem"}}/>
    </FormWrapper>
  )
}

export default LoginForm;