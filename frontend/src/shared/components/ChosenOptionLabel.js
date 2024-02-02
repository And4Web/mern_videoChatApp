import React from 'react'
import {connect} from 'react-redux';
// import { styled } from '@mui/system';
import {Typography} from '@mui/material';

function ChosenOptionLabel({username}) {
  return (
    <Typography sx={{
      fontSize: "1rem",
      color: "white",
      fontWeight: "bold"
    }}>{`${username ? `Current Buddy - ${username}`: ""}`}</Typography>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.chat?.chosenChatDetails?.username
  }
}

export default connect(mapStateToProps)(ChosenOptionLabel)