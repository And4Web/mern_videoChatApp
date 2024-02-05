const Conversation = require('../../models/conversation');
const Message = require('../../models/message');
const serverStore = require('../../serverStore');

const updateChatHistory = async (conversationId, toSpecifiedSocketId) => {
  const conversation = await Conversation.findById(conversationId).populate({
    path: "messages", 
    model: "Message",
    populate: {
      path: "author",
      model: "User",
      select: "username _id",
    }
  });

  console.log("chat.js updateChatHistory: ", toSpecifiedSocketId, conversationId)
  console.log("got toSpecifiedSocketId")

  if(conversation){
    const io = serverStore.getSocketServerInstance();  
    
    if(toSpecifiedSocketId){      
      // initial update of chat history
      return io.to(toSpecifiedSocketId).emit("direct-chat-history",{
        messages: conversation.messages,
        participants: conversation.participants,
      })
    }

    // check if users of this conversation are online

    // if yes emit to them update of messages

    conversation.participants.forEach(userId=>{
      const activeConnections = serverStore.getOnlineUsers(userId.toString());

      activeConnections.forEach((socketId)=>{
        io.to(socketId).emit("direct-chat-history", {
          messages: conversation.messages,
          participants: conversation.participants,
        })
      })
    })
  }
}

module.exports = {
  updateChatHistory,
}