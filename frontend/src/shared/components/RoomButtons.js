import React from 'react'
import {styled} from '@mui/system';
import {connect} from 'react-redux';

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


function RoomButtons({localStream}) {
  return (
    <MainContainer>
      <ScreenShareButton/>
      <MicButton localStream={localStream}/>
      <CloseRoomButton/>
      <CameraButton localStream={localStream}/>
    </MainContainer>
  )
}

const mapStateToProps = ({room}) => {
  return {
    ...room
  }
}

export default connect(mapStateToProps)(RoomButtons)