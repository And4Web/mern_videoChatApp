import React, {useState} from 'react'
import {styled} from '@mui/system';

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
  width: "100%",
  height: "100vh"
}

const minimizedRoomStyle = {
  bottom: "1rem",
  right: "1rem",
  width: "30%",
  height: "40vh"
}

function Room() {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized)
  }

  return (
    <MainContainer style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
      Room
    </MainContainer>
  )
}

export default Room