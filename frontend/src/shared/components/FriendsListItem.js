import React from 'react'
import Button from '@mui/material/Button';
import Avatar from './Avatar';
import Typography from '@mui/material/Typography'
import OnlineIndicator from './OnlineIndicator';

function FriendsListItem({username, id, isOnline}) {
  return (
    <Button style={{
      width: "100%",
      height: "2.5rem",
      marginTop: ".6rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textTransform: "none",
      color: "black",
      position: 'relative',
      paddingBottom: "1rem",
      borderBottom: "1px solid black",
      
    }}>
      <Avatar username={username}/>
        <Typography style={{
          marginLeft: ".8rem",
          fontWeight: 500,
          color: "#8e9297"
        }} variant='subtitle1' align='left'>{username}</Typography>
        {isOnline && <OnlineIndicator/>}
    </Button>
  )
}

export default FriendsListItem