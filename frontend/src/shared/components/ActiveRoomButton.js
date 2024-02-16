import React from "react";
import Avatar from "./Avatar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

function ActiveRoomButton({
  creatorUsername,
  roomId,
  amountOfParticipants,
  isUserInRoom,
}) {
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      // join room
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected ${amountOfParticipants}`;

  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
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
        >
          <Avatar username={creatorUsername} />
        </Button>
      </div>
    </Tooltip>
  );
}

export default ActiveRoomButton;
