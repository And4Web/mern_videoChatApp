import React from 'react'
import {styled} from '@mui/system';
import FriendsListItem from './FriendsListItem';


const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",

});

const dummyFriends = [
  {
    id: 1, username: "Anand", isOnline: true
  },
  {
    id: 2, username: "Susheel", isOnline: false
  },
  {
    id: 3, username: "Aneeta", isOnline: true
  },
  {
    id: 4, username: "Kalpana", isOnline: false
  },
]

function FriendsList() {
  return (
    <MainContainer>
      {
        dummyFriends.map(f=>(
          <div >
          <FriendsListItem
            username={f.username}
            id={f.id}
            key={f.id}
            isOnline={f.isOnline}
          />
          
          
          </div>
        ))
      }
    </MainContainer>
  )
}

export default FriendsList