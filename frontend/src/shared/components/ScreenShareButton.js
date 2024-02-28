import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

import * as webRTCHandler from '../../realtimeComm/webRTCHandler';

const constraints = {
  audio: false,
  video: true
}

function ScreenShareButton({
  localStream,
  screenSharingStream,
  setScreenSharingStream,
  isScreenSharingActive
}) {
  // const [isScreenShared, setIsScreenShared] = useState(isScreenSharingActive);
  const handleShareScreenToggle = async () => {    
    console.log("screen share button clicked...", isScreenSharingActive)
    if(!isScreenSharingActive){
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (error) {
        console.log("Error occurred when trying to share screen >>> ", error)
      }
      
      if(stream){
        console.log("ScreenShareButton.js stream >>> ", stream);
        setScreenSharingStream(stream);
        // switch outgoing tracks from localStream to screenShare stream
        webRTCHandler.switchOutgoingTracks(stream);
      }
    }else{
      // switch outgoing tracks from screenShare stream to localStream - turn off screen sharing
      webRTCHandler.switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach(t=>t.stop())
      setScreenSharingStream(null);
    }
    
  };
  return (
    <IconButton onClick={handleShareScreenToggle} style={{ color: "white" }}>
      {!isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
}

export default ScreenShareButton;
