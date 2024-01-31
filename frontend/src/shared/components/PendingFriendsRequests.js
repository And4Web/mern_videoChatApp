import React from 'react'
import {styled} from '@mui/system';
import PendingFriendsRequestsItem from './PendingFriendsRequestsItem';
import {connect} from 'react-redux';

const MainContainer = styled("div")({
  height: "25%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto"
});

// const dummyInvitations = [
//   {
//     id: "1",
//     senderId: {
//       username: "Girdhar",
//       mail: "girdhar@gmail.com"
//     }
//   },
//   {
//     id: "2",
//     senderId: {
//       username: "Sakshi",
//       mail: "sakshi@gmail.com"
//     }
//   },
// ]



function PendingFriendsRequests({pendingFriendsRequests}) {
  return (
    <MainContainer>
      {pendingFriendsRequests.map(i=>(
        <>
          <PendingFriendsRequestsItem
            key={i._id}
            id={i._id}
            username={i.senderId.username}
            mail={i.senderId.email}
          />
        </>
      ))}
    </MainContainer>
  )
}

const mapStateToProps = ({friends}) => {
  return {
    ...friends
  }
}

export default connect(mapStateToProps)(PendingFriendsRequests)