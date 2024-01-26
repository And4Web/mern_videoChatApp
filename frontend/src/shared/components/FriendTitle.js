import React from 'react'
import { Typography } from '@mui/material';

function FriendTitle({title}) {
  return (
    <Typography sx={{
      textTransform: "uppercase",
      color: "#8e9297",
      fontsize: "1rem",
      marginTop: ".5rem"
    }}>{title}</Typography>
  )
}

export default FriendTitle