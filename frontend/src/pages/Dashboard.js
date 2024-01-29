import React, { useEffect } from 'react';
// import {useSelector} from 'react-redux';
import { styled } from '@mui/system';

import Sidebar from '../shared/components/Sidebar';
import FriendsSidebar from '../shared/components/FriendsSidebar';
import AppBar from '../shared/components/AppBar';
import Messanger from '../shared/components/Messanger'
import { logout } from '../shared/utils/auth';
import {getActions} from '../redux/actions/authActions';
import {connect} from 'react-redux';

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

function Dashboard({setUserDetails}) {
  
  useEffect(()=>{
    const userDetails = localStorage.getItem("user")

    if(!userDetails){
      logout()
    }else{
      setUserDetails(JSON.parse(userDetails))
    }
  },[])
  return (
    <Wrapper>
      {/* Dashboard */}
      <Sidebar/>
      <FriendsSidebar/>
      <Messanger/>
      <AppBar/>
    </Wrapper>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(Dashboard)