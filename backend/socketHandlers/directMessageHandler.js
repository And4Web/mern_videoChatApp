const Conversation = require('../models/conversation');
const Message = require('../models/message');


const directMessageHandler = async (socket, data) => {
  try {
    console.log("directMessageHandler event listened...", data)
    const {_id: userId} = socket.user;
    const {receiverUserId, content} = data;

    // create new Message
    const message = await Message.create({
      content: content,
      authorId: userId,
      date: new Date(),
      type: "DIRECT"
    })

    // find if conversation exists with this two users - if not then create new
    const conversation = await Conversation.findOne({
      participants: {$all: [userId, receiverUserId]}
    });

    if(conversation){
      conversation.messages.push(message._id);
      await conversation.save();

      // perform and update to sender and receiver if is online
      

    }else{
      // create new conversation if not exist
      const newConversation = await Conversation.create({
        messages: [message._id],
        participants: [userId, receiverUserId]
      })

      // perform and update to sender and receiver if is online

    }    


  } catch (error) {
    console.log("directMessageHandler error: ", error)
  }
}

module.exports = directMessageHandler;