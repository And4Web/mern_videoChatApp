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

function FriendsList({friends}) {
  return (
    <MainContainer>
      {
        friends.map(f=>(
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