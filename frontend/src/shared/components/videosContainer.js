import React from 'react'
import { styled} from '@mui/system';

const MainContainer = styled("div")({
  height: "85%",
  width: '100%',
  display: "flex",
  flexWrap: "wrap"
})

function VideosContainer() {
  return (
    <MainContainer></MainContainer>
  )
}

export default VideosContainer