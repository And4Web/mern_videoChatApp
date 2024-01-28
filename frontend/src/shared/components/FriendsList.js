import React from 'react'
import {styled} from '@mui/system';
import FriendsListItem from './FriendsListItem';

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%"
});

const dummyFriends = [
  {
    id: 1, username: "Anand", isOnline: true
  },
  {
    id: 2, username: "Atul", isOnline: false
  },
  {
    id: 3, username: "Aneeta", isOnline: true
  },
  {
    id: 4, username: "Archana", isOnline: false
  },
]

function FriendsList() {
  return (
    <MainContainer>
      {
        dummyFriends.map(f=>(
          <FriendsListItem
            username={f.username}
            id={f.id}
            key={f.id}
            isOnline={f.isOnline}
          />
        ))
      }
    </MainContainer>
  )
}

export default FriendsList