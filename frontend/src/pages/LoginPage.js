import React, {useState, useEffect} from 'react'
import AuthBox from '../shared/components/AuthBox';
import {Typography} from '@mui/material';
import LoginForm from '../shared/components/LoginForm';

import { validateLoginForm } from '../shared/utils/validators';

function LoginPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{
    setIsFormValid(validateLoginForm(mail, password))
  }, [mail, password, setIsFormValid])


  const handleLogin = () => {
    console.log({mail, password, isFormValid})
    setMail("")
    setPassword("")
  }
  
  return (
    <AuthBox>
      <Typography variant='h6' sx={{color: "#999999"}}>Welcome, It feels good to see you Back!</Typography>
      <Typography variant='h4'>Login Now</Typography>
      
      <LoginForm mail={mail} setMail={setMail} password={password} setPassword={setPassword} isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

export default LoginPage