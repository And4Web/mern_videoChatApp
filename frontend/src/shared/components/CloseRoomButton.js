import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import People from '@mui/icons-material/People'
import CloseIcon from '@mui/icons-material/Close'
import * as roomHandler from '../../realtimeComm/roomHandler';

function CloseRoomButton() {

  const handleLeaveToggle = () => {
    roomHandler.leaveRoom();
  }
  return (
    <IconButton onClick={handleLeaveToggle} style={{color: "white"}}>
      <CloseIcon/>
    </IconButton>
  )
}

export default CloseRoomButton