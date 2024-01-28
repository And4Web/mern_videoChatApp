import React, { useState } from 'react';
import CustomButton from './CustomButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  margin: ".8rem .4rem",
  width: "100%",
  height: "2.5rem",
  background: "#3ba55d"
};

function AddFriendButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  }

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false)
  }
  return (
    <div>
      <CustomButton additionalStyles={additionalStyles} label="Add Friend" onClick={handleOpenAddFriendDialog}></CustomButton>
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </div>
  )
}

export default AddFriendButton