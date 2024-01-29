import React, { useState } from 'react'
import {Tooltip, Typography, Box }from '@mui/material'
import Avatar from './Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';

function PendingFriendsRequestsItem({
  id, username, mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {}
}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  
  const handleAcceptInvitation = () => {
    acceptFriendInvitation({id});
    setButtonDisabled(true)
  }

  const handleRejectInvitation = () => {
    rejectFriendInvitation({id});
    setButtonDisabled(true);
  }
  return (
    <Tooltip title={mail}>
      <div style={{width: "100%", borderBottom: "1px solid black", paddingBottom: ".6rem"}}>
        <Box sx={{
          width: "100%",
          height: "2.5rem",
          marginTop: ".5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Avatar username={username}/>
          <Typography sx={{
            marginLeft: ".5rem",
            fontWeight: 700,
            color: "#8e9297",
            flexGrow: 1
          }} variant='subtitle1'>{username}</Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  )
}

export default PendingFriendsRequestsItem