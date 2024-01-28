import React from 'react'
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function OnlineIndicator() {
  return (
    <Box sx={{
      color: "#3ba55d",
      display: "flex",
      alignItems: "center",
      position: "absolute",
      right: ".5rem",
    }}>
      <FiberManualRecordIcon/>
    </Box>
  )
}

export default OnlineIndicator