import React, {useRef, useEffect} from 'react'
import {styled} from '@mui/system';
import MessagesHeader from './MessagesHeader'
import Message from './Message';
import DateSeparator from './DateSeparator'

import {connect} from 'react-redux';

const MainContainer = styled("div")({
  height: "calc(100% - 3.5rem)",
  overFlow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

// const DUMMY_MESSAGES = [
//   {
//     _id: 1,
//     content: "hello",
//     sameAuthor: "false",
//     author: {
//       username: "Shivani",
//     },
//     date: "22/01/2024",
//     sameDay: false,
//   },
//   {
//     _id: 2,
//     content: "hello once again",
//     sameAuthor: "true",
//     author: {
//       username: "Shivani",
//     },
//     date: "22/01/2024",
//     sameDay: true,
//   },
//   {
//     _id: 3,
//     content: "hello third time",
//     sameAuthor: "true",
//     author: {
//       username: "Shivani",
//     },
//     date: "23/01/2024",
//     sameDay: false,
//   },
//   {
//     _id: 4,
//     content: "hello response first time",
//     sameAuthor: false,
//     author: {
//       username: "Anand",
//     },
//     date: "23/01/2024",
//     sameDay: true,
//   },
//   {
//     _id: 5,
//     content: "hello response third time",
//     sameAuthor: true,
//     author: {
//       username: "Anand",
//     },
//     date: "24/01/2024",
//     sameDay: false,
//   },
// ];

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyyy/gi, (matched)=>map[matched])
  
};


function Messages({chosenChatDetails, messages}) {
  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username}/>
      {messages.map((message, index)=>{
        const {_id, content, author, date} = message;        

        const sameAuthor = index > 0 && messages[index].author._id === messages[index - 1].author._id;

        const sameDay = index > 0 && convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") === convertDateToHumanReadable((new Date(messages[index - 1].date)), "dd/mm/yy")


        return (
          <div key={_id} style={{width: "98%"}}>
            {(!sameDay || index === 0) && (
              <DateSeparator
                date={convertDateToHumanReadable(new Date(message.date), "dd/mm/yy")}
              />
            )}
            <Message              
              content={content}
              username={author.username}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(new Date(date), "dd/mm/yy")}
              sameDay={sameDay}
            />
          </div>
        )
      })}
    </MainContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    chosenChatDetails: state.chat?.chosenChatDetails, 
    messages: state.chat?.messages
  }
}

export default connect(mapStateToProps)(Messages)