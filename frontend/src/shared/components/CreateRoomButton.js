import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import * as roomHandler from "../../realtimeComm/roomHandler";

function CreateRoomButton({ isUserInRoom }) {
  const createNewRoomHandler = () => {
    //Creating a room and sending infor to the server about this
    // console.log("CreateRoomButton.js >>> Creating new room...", isUserInRoom);
    roomHandler.createNewRoom();
  };

  return (
    <Button
      disabled={isUserInRoom}
      style={{
        width: "3rem",
        height: "3rem",
        borderRadius: "1rem",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: ".7rem",
        color: "white",
        backgroundColor: "#5865F2",
      }}
      onClick={createNewRoomHandler}
    >
      <AddIcon />
    </Button>
  );
}

export default CreateRoomButton;
