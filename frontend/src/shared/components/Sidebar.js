import React from 'react'
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';

const MainContainer = styled("div")({
  width: "12%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225"
});


function Sidebar() {
  return (
    <MainContainer>
      <MainPageButton/>
    </MainContainer>
  )
}

export default Sidebar