import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: 0,
  padding: 0,
  // border: "1px solid black",
});
const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "14px",
  // textDecoration: "underline",
  marginRight: ".5rem",
  
});
const Input = styled("input")({
  flexGrow: 1,
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
  width: "90%",
  height: "2.2rem",
  outline: 'none'
});

function InputComponent(props) {
  const { label, value, setValue, type, placeholder } = props;
  // console.log("inputcomponent props: ",props)
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      ></Input>
    </Wrapper>
  );
}

export default InputComponent;
