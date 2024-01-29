import React from 'react'
import {styled} from '@mui/system';
import PendingFriendsRequestsItem from './PendingFriendsRequestsItem';

const MainContainer = styled("div")({
  height: "25%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto"
});

const dummyInvitations = [
  {
    id: "1",
    senderId: {
      username: "Girdhar",
      mail: "girdhar@gmail.com"
    }
  },
  {
    id: "2",
    senderId: {
      username: "Sakshi",
      mail: "sakshi@gmail.com"
    }
  },
]

function PendingFriendsRequests() {
  return (
    <MainContainer>
      {dummyInvitations.map(i=>(
        <>
          <PendingFriendsRequestsItem
            key={i.id}
            id={i.id}
            username={i.senderId.username}
            mail={i.senderId.mail}
          />
        </>
      ))}
    </MainContainer>
  )
}

export default PendingFriendsRequests