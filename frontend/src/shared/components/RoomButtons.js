import React from 'react'
import {styled} from '@mui/system';

import ScreenShareButton from './ScreenShareButton'
import MicButton from './MicButton'
import CloseRoomButton from './CloseRoomButton'
import CameraButton from './CameraButton'


const MainContainer = styled("div")({
  height: "18%",
  width: '100%',
  backgroundColor: "#5865f2",
  display: "flex",
  borderTopLeftRadius: ".5rem",
  borderTopRightRadius: ".5rem",
  alignItems: "center",
  justifyContent: "center",
  position: 'absolute',
  bottom: "0rem"
})


function RoomButtons() {
  return (
    <MainContainer>
      <ScreenShareButton/>
      <MicButton/>
      <CloseRoomButton/>
      <CameraButton/>
    </MainContainer>
  )
}

export default RoomButtons