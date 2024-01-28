import React from 'react'
import {styled} from '@mui/system';

const AvatarPreview = styled("div")({
  height:"2.5rem",
  width: "2.5rem",
  backgroundColor: "#5865f2",
  borderRadius: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2rem",
  fontWeight: 700,
  marginLeft: "5px",
  color: "white"
});

function Avatar({username, large}) {
  return (
    <AvatarPreview>
      {username.substring(0,2).toUpperCase()}
    </AvatarPreview>
  )
}

export default Avatar