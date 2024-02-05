import { chatActions } from "../actions/chatActions"

const initialState = {
  chosenChatDetails: null,
  chatTypes: null,
  messages: []
}

const chatReducer = (state=initialState, action) => {
  switch(action.type){
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.chatDetails,
        chatTyes: action.chatType,
        
      }
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages
      }
    case chatActions.SET_CHAT_TYPE:
      return {
        ...state,
        chatType: action.chatType
      }
    default: return state
  }
}


export default chatReducer