import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

function ScreenShareButton() {
  const [isScreenShared, setIsScreenShared] = useState(true);

  const handleShareScreenToggle = () => {
    setIsScreenShared(!isScreenShared);
  };
  return (
    <IconButton onClick={handleShareScreenToggle} style={{ color: "white" }}>
      {isScreenShared ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
}

export default ScreenShareButton;
