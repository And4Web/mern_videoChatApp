import React from 'react'
import { styled} from '@mui/system';
import {connect} from 'react-redux';
import Video from './Video';

const MainContainer = styled("div")({
  height: "85%",
  width: '100%',
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: "wrap",
  // overflowY: "scroll",
  
})

function VideosContainer({localStream, audioOnly, remoteStreams}) {
  return (
    <MainContainer>      
        <Video stream={localStream} isLocalStream isAudioOnly={audioOnly}/>
        {remoteStreams.map(stream=>{
          return (
            <Video key={stream.id} stream={stream}/>
          )
        })}    
    </MainContainer>
  )
}

const mapStateToProps = ({room}) => {
  return {
    ...room,
  }
}

export default connect(mapStateToProps)(VideosContainer)