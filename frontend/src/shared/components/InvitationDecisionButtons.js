import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

function InvitationDecisionButtons({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton
        style={{
          color: "white",
        }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{
          color: "white",
        }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <ClearIcon/>
      </IconButton>
    </Box>
  );
}

export default InvitationDecisionButtons;