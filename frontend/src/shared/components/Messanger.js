import React from 'react'
import { styled } from '@mui/system';
import {connect} from 'react-redux';

import WelcomMessage from './WelcomMessage';
import MessangerContent from './MessangerContent';

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


function Messanger({chosenChatDetails, messages}) {
  return (
    <MainContainer>
      {
        !chosenChatDetails ? (
          <WelcomMessage/>
        ) : (
          <MessangerContent chosenChatDetails={chosenChatDetails} messages={messages}/>
        )
      }
    </MainContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    chosenChatDetails: state.chat?.chosenChatDetails,
    messages: state.chat?.messages
  }
}

export default connect(mapStateToProps)(Messanger)