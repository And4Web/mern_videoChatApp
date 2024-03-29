import React, { useEffect } from 'react';
// import {useSelector} from 'react-redux';
import { styled } from '@mui/system';

import Sidebar from '../shared/components/Sidebar';
import FriendsSidebar from '../shared/components/FriendsSidebar';
import AppBar from '../shared/components/AppBar';
import Messanger from '../shared/components/Messanger';
import Room from '../shared/components/Room'
import { logout } from '../shared/utils/auth';
import {getActions} from '../redux/actions/authActions';
import {connect} from 'react-redux';

import {connectWithSocketServer} from '../realtimeComm/socketConnection';

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

function Dashboard({setUserDetails, isUserInRoom}) {
  
  useEffect(()=>{
    const userDetails = localStorage.getItem("user")

    if(!userDetails){
      logout()
    }else{
      setUserDetails(JSON.parse(userDetails))
      connectWithSocketServer(userDetails)
    }
  },[])
  return (
    <Wrapper>
      {/* Dashboard */}
      <Sidebar/>
      <FriendsSidebar/>
      <Messanger/>
      <AppBar/>
      {isUserInRoom && <Room/>}
    </Wrapper>
  )
}

const mapStateToProps = ({room}) => {
  return {
    ...room
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Dashboard)