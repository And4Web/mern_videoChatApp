const Conversation = require('../models/conversation');
const Message = require('../models/message');
const {updateChatHistory} = require('../socketHandlers/updates/chat');
const {connectedUsersMap} = require('../serverStore');


const directMessageHandler = async (socket, data) => {
  try {
    console.log("directMessageHandler event listened...", data)
    console.log("direct messages socket", socket.id, socket.user.username)
    const {_id: userId} = socket.user;
    const {receiverUserId, content, clientSocketId} = data;

    let receiverSocketId;
    for(let [key, value] of connectedUsersMap()){
      if(value.userId = receiverUserId){
        receiverSocketId = key;
      }
    }

    // console.log("directMessageHandler.js message came from client >>> ", userId, receiverUserId, clientSocketId)

    // create new Message
    const message = await Message.create({
      content: content,
      author: userId,
      date: new Date(),
      type: "DIRECT"
    })

    // find if conversation exists between these two users - if not then create new
    const conversation = await Conversation.findOne({
      participants: {$all: [userId, receiverUserId]}
    });

    if(conversation){
      conversation.messages.push(message._id);
      await conversation.save();

      // perform and update to sender and receiver if is online
      // updateChatHistory(conversation._id.toString(), socket.id);
      updateChatHistory(conversation._id.toString(), receiverSocketId)
     
    }else{
      // create new conversation if not exist
      const newConversation = await Conversation.create({
        messages: [message._id],
        participants: [userId, receiverUserId]
      })

      // perform and update to sender and receiver if is online
      updateChatHistory(newConversation._id.toString(), socket.id);
      updateChatHistory(newConversation._id.toString(), receiverSocketId)
     
    }                                
  } catch (error) {
    console.log("directMessageHandler error: ", error)
  }
}

module.exports = directMessageHandler;