import React from 'react'
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';

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
    </MainContainer>
  )
}

export default FriendsSidebar