import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const constraints = {
  audio: false,
  video: true
}

function ScreenShareButton({
  localStream,
  setScreenSharingStream,
  isScreenSharingActive
}) {
  const [isScreenShared, setIsScreenShared] = useState(true);

  const handleShareScreenToggle = async () => {
    if(!isScreenSharingActive){
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (error) {
        console.log("Error occurred when trying to share screen >>> ", error)
      }

      if(stream){
        setScreenSharingStream(stream);
        // webRTCHandler.switchOutgoingVideo tracks
      }else{
        // webRTCHandler.switchOutgoingTracks
        setScreenSharingStream.getTrack().forEach(t=>t.stop())
        setScreenSharingStream(null);
      }
    }
    // setIsScreenShared(!isScreenShared);
  };
  return (
    <IconButton onClick={handleShareScreenToggle} style={{ color: "white" }}>
      {isScreenShared ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
}

export default ScreenShareButton;
