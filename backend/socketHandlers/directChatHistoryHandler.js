const Conversation = require('../models/conversation');
const Message = require('../models/message');
const {updateChatHistory} = require("../socketHandlers/updates/chat");

const directChatHistoryHandler = async(socket, data)=>{
  try {
    const {_id: userId} = socket.user;
    const {receiverUserId} = data;
    
    console.log("directChatHistoryHandler.js >>> ", data)

    const conversation = await Conversation.findOne({
      participants: {$all: [userId, receiverUserId]}
    })

    console.log('directChatHistory.js conversation >>> ', conversation)

    if(conversation){
      updateChatHistory(conversation._id.toString(), socket.id)
    } else {
      console.log("conversation is null object, check your code.")
    }
  } catch (error) {
    console.log("directChatHistoryHandler error: ", error);
  }
}

module.exports = directChatHistoryHandler