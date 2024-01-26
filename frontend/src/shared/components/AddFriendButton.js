import React from 'react';
import CustomButton from './CustomButton';

const additionalStyles = {
  margin: ".8rem .4rem",
  width: "100%",
  height: "2.5rem",
  background: "#3ba55d"
};

function AddFriendButton() {

  const handleOpenAddFriendDialog = () => {

  }
  return (
    <div>
      <CustomButton additionalStyles={additionalStyles} label="Add Friend" onClick={handleOpenAddFriendDialog}></CustomButton>
    </div>
  )
}

export default AddFriendButton