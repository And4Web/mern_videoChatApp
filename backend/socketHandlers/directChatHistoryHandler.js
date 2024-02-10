const Conversation = require('../models/conversation');
const Message = require('../models/message');
const {updateChatHistory} = require("../socketHandlers/updates/chat");
const {connectedUsersMap} = require('../serverStore');

const directChatHistoryHandler = async(socket, data)=>{
  try {
    const {_id: userId} = socket.user;
    const {receiverUserId} = data;

    let receiverSocketId;
    for(let [key, value] of connectedUsersMap()){
      if(value.userId = receiverUserId){
        receiverSocketId = key;
      }
    }
    
    // console.log("directChatHistoryHandler.js >>> ", data, userId, socket.user.username, socket.id, receiverSocketId)

    const conversation = await Conversation.findOne({
      participants: {$all: [userId, receiverUserId]},
      // type: "DIRECT"
    })

    // console.log('directChatHistory.js conversation >>> ', conversation)

    if(conversation){
      updateChatHistory(conversation._id.toString(), socket.id)
      updateChatHistory(conversation._id.toString(), receiverSocketId)
    } 
    // else {
    //   console.log("conversation is null object, check your code.")
    // }
  } catch (error) {
    console.log("directChatHistoryHandler error: ", error);
  }
}

module.exports = directChatHistoryHandler