import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import People from '@mui/icons-material/People'
import CloseIcon from '@mui/icons-material/Close'

function CloseRoomButton() {
  // const [roomEnabled, setRoomEnabled] = useState(true);

  const handleLeaveToggle = () => {
    // setRoomEnabled(!roomEnabled);
  }
  return (
    <IconButton onClick={handleLeaveToggle} style={{color: "white"}}>
      <CloseIcon/>
    </IconButton>
  )
}

export default CloseRoomButton