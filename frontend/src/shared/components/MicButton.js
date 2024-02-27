import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Mic from '@mui/icons-material/Mic'
import MicOff from '@mui/icons-material/MicOff'

function MicButton({localStream}) {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleMicToggle = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicEnabled(!micEnabled);
  }
  return (
    <IconButton onClick={handleMicToggle} style={{color: "white"}}>
      {micEnabled ? <Mic/> : <MicOff/>}
    </IconButton>
  )
}

export default MicButton