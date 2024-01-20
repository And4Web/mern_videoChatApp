import React, {useState} from 'react'
import AuthBox from '../shared/components/AuthBox';
import {Typography} from '@mui/material';
import LoginForm from '../shared/components/LoginForm';

function LoginPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {}
  
  return (
    <AuthBox>
      <Typography variant='h6' sx={{color: "#999999"}}>Welcome, It feels good to see you Back!</Typography>
      <Typography variant='h4'>Login Now</Typography>
      
      <LoginForm mail={mail} setMail={setMail} password={password} setPassword={setPassword} isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

export default LoginPage