import React from 'react';
import Button from '@mui/material/Button';

function CustomButton(props) {
  const {label, additionalStyles, disabled, onClick} = props;
  console.log("props: ", props)
  return (
    <div>
      <Button variant='contained' sx={{
        bgcolor: "#5865F2",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "23.5rem",
        height: "2.5rem",
        // margin: "20px 28px", 
        cursor: "pointer"       
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}>{label}</Button>
    </div>
  )
}

export default CustomButton