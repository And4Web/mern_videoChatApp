import React from 'react'
import { styled } from '@mui/system';

const MainContainer = styled("div")({
  width: "90%",
  // height: "100%",
  display: "flex",
  // flexDirection: "column",
  flesGrow: 1,
  marginTop: "3rem",
  // alignItems: "center",
  backgroundColor: "#36393F"
});


function Messanger() {
  return (
    <MainContainer>Messanger</MainContainer>
  )
}

export default Messanger