export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: 'GROUP'
}

export const chatActions = {
  SET_MESSAGES: "CHAT.SET_MESSAGES",
  SET_CHOSEN_CHAT_DETAILS: "CHAT.SET_CHOSEN_CHAT_DETAILS",
  SET_CHAT_TYPE: "CHAT.SET_CHAT_TYPE"
}

export const getActions = (dispatch) => {
  return {
    setChosenChatDetails: (details, chatType) => dispatch(setChosenChatDetails(details, chatType)),
    setMessages: (messages) => {
      dispatch(setMessages(messages))
     }
  }
}

export const setChosenChatDetails = (chatDetails, type) => {
  return {
    type: chatActions.SET_CHOSEN_CHAT_DETAILS,
    chatType: type,
    chatDetails
  }
}

export const setMessages = (messages) => {
  return {
    type: chatActions.SET_MESSAGES,
    messages
  }
}