import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CreateRoomButton() {

  const createNewRoomHandler = () => {
    //Creating a room and sending infor to the server about this
    console.log("CreateRoomButton.js >>> Creating new room...")
  }

  return (
    <Button style={{
      width: "3rem",
      height: "3rem",
      borderRadius: "1rem",
      margin: 0,
      padding: 0,
      minWidth: 0,
      marginTop: ".7rem",
      color: "white",
      backgroundColor: "#5865F2"
    }} onClick={createNewRoomHandler}>
      <AddIcon/>
    </Button>
  )
}

export default CreateRoomButton