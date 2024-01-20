import React, {useState, useEffect} from 'react'
import AuthBox from '../shared/components/AuthBox';
import {Typography} from '@mui/material';
import RegisterForm from '../shared/components/RegisterForm';
import { validateRegisterForm } from '../shared/utils/validators';

function RegisterPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  

  useEffect(()=>{
    setIsFormValid(validateRegisterForm(name, mail, password))
  }, [name, mail, password, setIsFormValid])

  const handleRegister = () => {
    console.log({mail, password, isFormValid})
    setMail("")
    setPassword("")
    setName("")
    setConfirmPassword("")
    setIsFormValid(false)
  }

  return (
    <AuthBox>
      <Typography variant='h6' sx={{color: "#999999"}}>Don't have an account yet!</Typography>
      <Typography variant='h4'>Register Now</Typography>

      <RegisterForm mail={mail} setMail={setMail} password={password} setPassword={setPassword} name={name} setName={setName} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} isFormValid={isFormValid} handleRegister={handleRegister} ></RegisterForm>
    </AuthBox>
  )
}

export default RegisterPage