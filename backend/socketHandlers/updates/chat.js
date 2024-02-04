const Conversation = require('../../models/conversation');
const serverStore = require('../../serverStore');

const updateChatHistory = async (conversationId, toSpecifiedSocketId = null) => {
  const conversation = await Conversation.findById(conversationId).populate({
    path: "messages", 
    model: "Message",
    populate: {
      path: "author",
      model: "User",
      select: "username _id",
    }
  });

  if(conversation){
    const io = serverStore.getSocketServerInstance();    
  }
}