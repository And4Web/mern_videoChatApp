import React from 'react'
import {styled} from '@mui/system';
import {Typography} from '@mui/material';
import Avatar from './Avatar';

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: ".7rem"
})

const AvatarContainer = styled("div")({
  width: "4.5rem",  
})

const MessagesContainer = styled("div")({
  display: "flex",
  flexDirection: "column"
})

const MessageContent = styled("div")({
  color: "#dcddde",
  fontSize: ".9rem"
})

const SameAuthorMessageContent = styled("div")({
  color: "#dcddde",
  width: "97%"
})

const SameAuthorMessageText = styled("span")({
  marginLeft: "4.5rem"
})

function Message({content, sameAuthor, username, date, sameDay }) {
  if(sameAuthor && sameDay){
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    )
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username}/>
      </AvatarContainer>

      <MessagesContainer>
        <Typography style={{fontSize: "1rem", color: "white", fontWeight: "bold"}}>{username}{" "}<span style={{fontSize: ".75rem", color: "#72767d"}}>{date}</span></Typography>
        <MessageContent>{content}</MessageContent>
      </MessagesContainer>
    </MainContainer>
  )
}

export default Message