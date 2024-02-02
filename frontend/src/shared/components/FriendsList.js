import React from 'react'
import {styled} from '@mui/system';
import FriendsListItem from './FriendsListItem';
import {connect} from 'react-redux';
import {getActions} from '../../redux/actions/friendsActions';


const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",

});

// const dummyFriends = [
//   {
//     id: 1, username: "Anand", isOnline: true
//   },
//   {
//     id: 2, username: "Susheel", isOnline: false
//   },
//   {
//     id: 3, username: "Aneeta", isOnline: true
//   },
//   {
//     id: 4, username: "Kalpana", isOnline: false
//   },
// ]

const checkUserOnline = (friends=[], onlineUsers=[]) => {
  friends.forEach(f=>{
    const isOnline = onlineUsers.find(u => u.userId === f.id);
    f.isOnline = isOnline ? true : false;
  })

  return friends;
}

function FriendsList({friends, onlineUsers}) {
  // console.log("friendsList.js:  ", onlineUsers)
  return (
    <MainContainer>
      {
        checkUserOnline(friends, onlineUsers).map(f=>(
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

const mapStateToProps = ({friends}) => {
  return {
    ...friends
  }
}

export default connect(mapStateToProps)(FriendsList)