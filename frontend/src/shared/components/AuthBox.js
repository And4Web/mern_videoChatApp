import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const BoxWrapper = styled('div')({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865f2",  //blue color
  border: "2px solid black"
}) 

function AuthBox(props) {
  return (
    <BoxWrapper>
      <Box sx={{
        width: 700,
        height: 400,
        bgcolor: "#2E2E2E", //login/register box dark grey color
        borderRadius: "5px",
        boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
        display: "flex",
        flexDirection: "column",
        padding: "25px",
        color: "#E8E8E8"  //login/register box text white color
      }}>{props.children}</Box>
    </BoxWrapper>
  )
}

export default AuthBox