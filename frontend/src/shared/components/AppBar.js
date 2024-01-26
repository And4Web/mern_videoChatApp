import React from 'react'
import { styled } from '@mui/system';

const MainContainer = styled("div")({
  // width: "calc(100% - 18.3rem)",
  width: "58.8%",
  height: "3rem",
  display: "flex",
  flexDirection: "column", 
  justifyContent: "space-between", 
  alignItems: "center",
  backgroundColor: "#36393F",
  position: "absolute",
  right: '0',
  top: "0",
  borderBottom: "1px solid black",
  padding: "0 1rem"

});


function AppBar() {
  return (
    <MainContainer>AppBar</MainContainer>
  )
}

export default AppBar