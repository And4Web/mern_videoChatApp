import React from 'react'
// import { styled } from '@mui/system';
import InputComponent from './InputComponent';


function LoginForm({mail, setMail, password, setPassword}) {

  return (
    <>     
     <InputComponent value={mail} setValue={setMail} label="E-mail" type="text" placeholder="Enter Email"></InputComponent>

     <InputComponent value={password} setValue={setPassword} label="Pasword" type="password" placeholder="Enter Password"></InputComponent>
    </>
  )
}

export default LoginForm;