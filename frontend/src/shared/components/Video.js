import React, {useEffect, useRef} from 'react';
import {styled} from '@mui/system';

const MainContainer = styled("div")({
  height: "50%",
  width: '40%',
  // width: 'auto',
  backgroundColor: "black",
  borderRadius: ".5rem",
  // border: "3px solid white",
  margin: ".5rem .5rem",
})

const VideoEl = styled("video")({
  width: "100%",
  height: "100%"
})

function Video({stream, isLocalStream, isAudioOnly}) {
  const videoRef = useRef();
  // console.log("Video.js >>> ", stream);

  useEffect(()=>{
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    }
    // console.log("Video.js isAudioOnly >>> ", isAudioOnly)
    
  }, [stream, isAudioOnly]);

  return (
    <MainContainer>
      <VideoEl ref={videoRef} autoPlay muted={isLocalStream ? true : false}></VideoEl>
    </MainContainer>
  )
}

export default Video;