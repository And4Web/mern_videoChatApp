import React from 'react';
// import {useSelector} from 'react-redux'
import {Routes, Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import Protected from './pages/Protected';

function App() {

  return (
    <div >
     <h1>Video chat app</h1>
     <Routes>
      <Route exact path="/login" element={<LoginPage/>}></Route>
      <Route exact path="/register" element={<RegisterPage/>}></Route>
      <Route exact path="/" element={<Protected><Dashboard/></Protected>}></Route>
     </Routes>
    </div>
  );
}

export default App;
