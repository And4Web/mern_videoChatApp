import React, {useEffect} from 'react'
import { styled } from '@mui/system';
// import {Typography} from '@mui/material';

import Messages from './Messages'
import NewMessageInput from './NewMessageInput'
import {getDirectChatHistory} from '../../realtimeComm/socketConnection'

const Wrapper = styled("div")({
  flexGrow: 1,
  padding: "1rem"
})

function MessangerContent({chosenChatDetails}) {

  useEffect(()=>{
    // fetching chat history from specific userId
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
      // messages
    })
  }, [chosenChatDetails])
  return (
    <Wrapper>
      <Messages/>
      <NewMessageInput/>
    </Wrapper>
  )
}

export default MessangerContent