import React from 'react'
import { styled } from '@mui/system';

const MainContainer = styled("div")({
  width: "12%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225"
});


function Sidebar() {
  return (
    <MainContainer>Sidebar</MainContainer>
  )
}

export default Sidebar