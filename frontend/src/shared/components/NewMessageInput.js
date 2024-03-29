import React, { useState } from 'react'
import  {styled} from '@mui/system';
import {connect} from 'react-redux';

import { sendDirectMessage } from '../../realtimeComm/socketConnection';

const MainContainer = styled("div")({
  height: "3.8rem",
  width: "100%",
  display: "flex",
  alignItems:"center",
  justifyContent: "center",
  // border: "1px solid white",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  color: "white",
  height: "90%",
  border: "none",
  borderRadius: ".7rem",
  fontSize: "1rem",
  padding: "0 .6rem"
})

function NewMessageInput({chosenChatDetails}) {
  const [message, setMessage] = useState("");

  const handleMessageValueChange = (e) => {
    setMessage(e.target.value);
  }
  const handleKeyPressed = (e) => {
    if(e.key === "Enter"){
      handleSendMessage();
    }
  }

  const handleSendMessage = () => {
    console.log("sending message to the server...");    

    if(message.length > 0){
      sendDirectMessage({
        receiverUserId: chosenChatDetails?.id,
        content: message
      })
      
    setMessage("")
    }
  }

  return (
    <MainContainer>
      <Input placeholder={`Write message to ${chosenChatDetails.username}`}
      value={message}
      onChange={handleMessageValueChange}
      onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  )
}

const mapStateToProps = ({chat}) => {
  return {
    ...chat
  }
}

export default connect(mapStateToProps)(NewMessageInput);