import React from 'react';
// import {useSelector} from 'react-redux';
import { styled } from '@mui/system';

import Sidebar from '../shared/components/Sidebar';
import FriendsSidebar from '../shared/components/FriendsSidebar';
import AppBar from '../shared/components/AppBar';
import Messanger from '../shared/components/Messanger'

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

function Dashboard() {
  // const state = useSelector(state=>state);
  // console.log({state})
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

export default Dashboard