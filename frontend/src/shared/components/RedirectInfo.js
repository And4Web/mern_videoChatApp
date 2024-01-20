import React from 'react';
import {Typography} from '@mui/material';
import {styled} from '@mui/system';

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "underline"
});

function RedirectInfo({text, redirectText, handleRedirect, additionalStyles}) {
  return (
    <Typography variant='subtitle2' sx={{
      color: "#72767D"
    }} style={additionalStyles ? additionalStyles : {}}>
      {text}
      <RedirectText onClick={handleRedirect} >{redirectText}</RedirectText>
    </Typography>
  )
}

export default RedirectInfo