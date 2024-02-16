import React from 'react'
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton'
import ActiveRoomButton from './ActiveRoomButton';

import {connect} from 'react-redux'

const MainContainer = styled("div")({
  width: "12%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225"
});


function Sidebar({activeRooms}) {
  // console.log("sidebar.js >>> ", activeRooms)
  return (
    <MainContainer>
      <MainPageButton/>
      <CreateRoomButton/>
      {activeRooms?.map(room=>(
          <ActiveRoomButton
            roomId={room.roomId}
            creatorUsername={room.creatorUsername}
            amountOfParticipants = {room.participants.length}
            key={room.roomId}
            isUserInRoom={room.isUserInRoom}
          />
        )
      )}
    </MainContainer>
  )
}

const mapStateToProps = ({room}) => {
  return {
    ...room
  }
}

export default connect(mapStateToProps)(Sidebar)