import React from 'react';
import {styled} from '@mui/system';
import {Typography} from '@mui/material'

import Avatar from './Avatar';

const MainContainer = styled("div")({
  width: "98%",
  marginTop: ".6rem",
  // display: "flex",
  // alignItem: "center",
});


function MessagesHeader({username=""}) {
  let modifiedUsername = `${username.slice(0,1).toUpperCase()}${username.slice(1)}`;
  return (
    <MainContainer>
      <Avatar large username={username}/>
      <Typography variant='h4' sx={{
        fontWeight:"bold",
        color: "white",
        marginLeft: ".4rem",
        marginRight: '.4rem'
      }}>{modifiedUsername}</Typography>  
      <Typography sx={{
        color: "#b9bbbe",
        marginRight: ".4rem",
        marginLeft: ".4rem"
      }}> Beginning of your conversation with {modifiedUsername}</Typography>
    </MainContainer>
  )
}

export default MessagesHeader 