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
        // switch outgoing tracks from localStream to screenShare stream
        webRTCHandler.switchOutgoingTracks(stream);
      }else{
        // switch outgoing tracks from screenShare stream to localStream
        webRTCHandler.switchOutgoingTracks(localStream);
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
