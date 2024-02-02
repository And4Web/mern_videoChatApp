const directMessageHandler = async (socket, data) => {
  try {
    const {userId} = socket.user;
    const {receiverUserId, content} = data;

    

  } catch (error) {
    console.log("directMessageHandler error: ", error)
  }
}

module.exports = directMessageHandler;