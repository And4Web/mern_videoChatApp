import React, {useEffect, useRef} from 'react'
import { styled} from '@mui/system';

const MainContainer = styled("div")({
  height: "50%",
  width: '50%',
  backgroundColor: "black",
  borderRadius: ".5rem"
})

const VideoEl = styled("video")({
  width: "100%",
  height: "100%"
})

function Video({stream, isLocalStream}) {
  const videoRef = useRef();

  useEffect(()=>{
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    }
  }, [stream]);

  return (
    <MainContainer>
      <VideoEl ref={videoRef} autoPlay muted={isLocalStream ? true : false}></VideoEl>
    </MainContainer>
  )
}

export default Video;