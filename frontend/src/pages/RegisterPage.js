import React, {useState} from 'react'
import AuthBox from '../shared/components/AuthBox';
import {Typography} from '@mui/material';
import RegisterForm from '../shared/components/RegisterForm';

function RegisterPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  return (
    <AuthBox>
      <Typography variant='h6' sx={{color: "#999999"}}>Don't have an account yet!</Typography>
      <Typography variant='h4'>Register Now</Typography>

      <RegisterForm mail={mail} setMail={setMail} password={password} setPassord={setPassword} name={name} setName={setName} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}></RegisterForm>
    </AuthBox>
  )
}

export default RegisterPage