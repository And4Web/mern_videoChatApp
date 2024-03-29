import React from 'react';
// import {useSelector} from 'react-redux'
import {Routes, Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import Protected from './pages/Protected';

import AlertNotification from './shared/components/AlertNotification';
import {connect, useSelector} from 'react-redux';

function App(props) {
  
  return (
    <div >
      {/* {JSON.stringify(props.user)} */}
     <Routes>
      <Route exact path="/login" element={<LoginPage/>}></Route>
      <Route exact path="/register" element={<RegisterPage/>}></Route>
      <Route exact path="/dashboard" element={<Dashboard/>}></Route>
      <Route exact path="/" element={<Protected><Dashboard/></Protected>}></Route>
     </Routes>
     {props.alert.showAlert && <AlertNotification/>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
    user: state.auth.userDetails
  }
}

export default connect(mapStateToProps)(App);
