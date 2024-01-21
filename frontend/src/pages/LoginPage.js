import React, {useState, useEffect} from 'react'
import AuthBox from '../shared/components/AuthBox';
import {Typography} from '@mui/material';
import LoginForm from '../shared/components/LoginForm';

import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux'

import {getActions} from '../redux/actions/authActions';
import { validateLoginForm } from '../shared/utils/validators';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const {login} = props;

  useEffect(()=>{
    setIsFormValid(validateLoginForm(email, password))
  }, [email, password, setIsFormValid])


  const handleLogin = () => {
    const userDetails = {email, password};

    login(userDetails, navigate);
  }
  
  return (
    <AuthBox>
      <Typography variant='h6' sx={{color: "#999999"}}>Welcome, It feels good to see you Back!</Typography>
      <Typography variant='h4'>Login Now</Typography>
      
      <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(LoginPage)