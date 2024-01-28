import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { validateMail } from "../utils/validators";
import InputComponent from './InputComponent';
import CustomButton from "./CustomButton";
import Typography from "@mui/material/Typography";

function AddFriendDialog({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    // send friend request to server
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography>Invite a Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            Enter an Email of a friend, you want to invite:
          </Typography>
        </DialogContentText>
        <InputComponent
          label=""
          type="text"
          value={mail}
          setValue={setMail}
          placeholder="Enter mail address"
        />
      </DialogContent>
      <DialogActions>
        <CustomButton 
        label="Send" 
        onClick={handleSendInvitation}
        additionalStyles={{margin: "1rem"}}
        disabled={!isFormValid}
        />
      </DialogActions>
    </Dialog>
  );
}

export default AddFriendDialog;
