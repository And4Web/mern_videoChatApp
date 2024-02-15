import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Mic from '@mui/icons-material/Mic'
import MicOff from '@mui/icons-material/MicOff'

function MicButton() {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleMicToggle = () => {
    setMicEnabled(!micEnabled);
  }
  return (
    <IconButton onClick={handleMicToggle} style={{color: "white"}}>
      {micEnabled ? <Mic/> : <MicOff/>}
    </IconButton>
  )
}

export default MicButton