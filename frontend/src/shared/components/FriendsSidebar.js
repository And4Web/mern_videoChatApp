import React from 'react'
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendTitle from './FriendTitle';
import FriendsList from './FriendsList';
import PendingFriendsRequests from './PendingFriendsRequests';

const MainContainer = styled("div")({
  width: "45%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136"
});


function FriendsSidebar() {
  return (
    <MainContainer>
      <AddFriendButton/>
      <FriendTitle title="Private messages"/>
      <FriendsList/>
      <FriendTitle title="Pending requests"/>
      <PendingFriendsRequests/>
    </MainContainer>
  )
}

export default FriendsSidebar