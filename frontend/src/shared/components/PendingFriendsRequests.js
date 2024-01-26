import React from 'react'
import {styled} from '@mui/system';

const MainContainer = styled("div")({
  height: "25%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto"
});

function PendingFriendsRequests() {
  return (
    <MainContainer>PendingFriendsRequests</MainContainer>
  )
}

export default PendingFriendsRequests