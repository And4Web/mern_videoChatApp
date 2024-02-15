import React, {useState} from 'react'
import {styled} from '@mui/system';
import ResizeRoomButton from './ResizeRoomButton.js';
import RoomButtons from './RoomButtons.js';
import VideosContainer from './VideosContainer.js'


const MainContainer = styled("div")({
  position: "absolute",
  borderRadius: ".5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center',
  backgroundColor: "#202225"
})

const fullScreenRoomStyle = {
  width: "92%",
  height: "92vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

const minimizedRoomStyle = {
  bottom: "1rem",
  right: "1rem",
  width: "30%",
  height: "40vh"
}

function Room() {
  const [isRoomMinimized, setIsRoomMinimized] = useState(false);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized)
  }

  return (
    <MainContainer style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
      <VideosContainer/>
      <RoomButtons/>
      <ResizeRoomButton isRoomMinimized={isRoomMinimized} handleRoomResize={roomResizeHandler}/>
    </MainContainer>
  )
}

export default Room