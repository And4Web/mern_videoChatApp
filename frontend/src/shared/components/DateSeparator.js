import React from 'react'
import {style, styled} from '@mui/system';

const Separator = styled('div')({
  width: "95%",
  backgroundColor: "#b9bbbe",
  height: "1px",
  position: "relative",
  marginTop: "1.3rem",
  marginBottom: ".8rem",
});

const DateLabel = styled("span")({
  backgroundColor: "#36393f",
  position: "absolute",
  left: "45%",
  top: "-.7rem",
  color: "#b9bbbe",
  padding: "0 .4rem",
  fontSize: ".9rem"
})

function DateSeparator({date}) {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  )
}

export default DateSeparator