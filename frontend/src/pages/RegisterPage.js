import React, {useState, useEffect} from 'react'
import AuthBox from '../shared/components/AuthBox';
import {Typography} from '@mui/material';
import RegisterForm from '../shared/components/RegisterForm';
import { validateRegisterForm } from '../shared/utils/validators';

import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux'

import {getActions} from '../redux/actions/authActions';

function RegisterPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  
  const navigate = useNavigate();

  const {register} = props;
  // console.log("RegisterPage.js props: ", props)

  useEffect(()=>{
    setIsFormValid(validateRegisterForm(username, email, password))
  }, [username, email, password, setIsFormValid])

  const handleRegister = () => {
    const userDetails = {email, password, username};

    register(userDetails, navigate);
  }

  return (
    <AuthBox>
      <Typography variant='h6' sx={{color: "#999999"}}>Don't have an account yet!</Typography>
      <Typography variant='h4'>Register Now</Typography>

      <RegisterForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} username={username} setUsername={setUsername} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} isFormValid={isFormValid} handleRegister={handleRegister} ></RegisterForm>
    </AuthBox>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(RegisterPage)