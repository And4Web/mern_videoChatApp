import React, {useEffect} from 'react'
import { styled } from '@mui/system';
import {Typography} from '@mui/material';

import Messages from './Messages'
import NewMessageInput from './NewMessageInput'

const Wrapper = styled("div")({
  flexGrow: 1,
  // height: "100%",
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center"
})


function MessangerContent({chosenChatDetails, messages}) {

  useEffect(()=>{
    // TODO
    // fetching chat history from specific userId
  }, [chosenChatDetails, messages])
  return (
    <Wrapper>
      <Messages/>
      <NewMessageInput/>
    </Wrapper>
  )
}

export default MessangerContent