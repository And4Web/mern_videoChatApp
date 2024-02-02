import React from 'react'
import { styled } from '@mui/system';
import {Typography} from '@mui/material';

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

function WelcomMessage() {
  return (
    <Wrapper>
      <Typography variant='h6' sx={{
        color: "white"
      }}>Choose a Friend from your friends list and start conversation 😍</Typography>
    </Wrapper>
  )
}

export default WelcomMessage