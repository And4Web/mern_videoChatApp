import React from 'react';
// import {useSelector} from 'react-redux'
import {Routes, Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import Protected from './pages/Protected';

import AlertNotification from './shared/components/AlertNotification';

function App() {

  return (
    <div >
     <Routes>
      <Route exact path="/login" element={<LoginPage/>}></Route>
      <Route exact path="/register" element={<RegisterPage/>}></Route>
      <Route exact path="/" element={<Protected><Dashboard/></Protected>}></Route>
     </Routes>
     <AlertNotification/>
    </div>
  );
}

export default App;
