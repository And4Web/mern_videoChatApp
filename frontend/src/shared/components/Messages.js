import React, {useRef, useEffect} from 'react'
import {styled} from '@mui/system';
import MessagesHeader from './MessagesHeader'
import Message from './Message';

import {connect} from 'react-redux';

const MainContainer = styled("div")({
  height: "calc(100% - 3.5rem)",
  overFlow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

const DUMMY_MESSAGES = [
  {
    _id: 1,
    content: "hello",
    sameAuthor: "false",
    author: {
      username: "Shivani",
    },
    date: "22/01/2024",
    sameDay: false,
  },
  {
    _id: 2,
    content: "hello once again",
    sameAuthor: "true",
    author: {
      username: "Shivani",
    },
    date: "22/01/2024",
    sameDay: true,
  },
  {
    _id: 3,
    content: "hello third time",
    sameAuthor: "true",
    author: {
      username: "Shivani",
    },
    date: "23/01/2024",
    sameDay: false,
  },
  {
    _id: 4,
    content: "hello response first time",
    sameAuthor: false,
    author: {
      username: "Anand",
    },
    date: "23/01/2024",
    sameDay: true,
  },
  {
    _id: 5,
    content: "hello response third time",
    sameAuthor: true,
    author: {
      username: "Anand",
    },
    date: "24/01/2024",
    sameDay: false,
  },
];

function Messages({chosenChatDetails, messages}) {
  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username}/>
      {DUMMY_MESSAGES.map((message, index)=>{
        const {_id, content, sameAuthor, author, date, sameDay} = message;
        return (
          <Message
            key={_id}
            content={content}
            username={author.username}
            sameAuthor={sameAuthor}
            date={date}
            sameDay={sameDay}
          />
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