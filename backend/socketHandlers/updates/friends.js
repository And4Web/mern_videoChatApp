const User = require("../../models/user");
const FriendRequest = require("../../models/friendRequest");
const serverStore = require('../../serverStore');

const updateFriendsPendingRequests = async (targetId) => {
  try {
    const pendingRequests = await FriendRequest.find({
      receiverId: targetId
    }).populate("senderId", "_id, username, email");

    // find if user of specified targetId has active connections(is online?)!
    const receiverList = serverStore.getOnlineUsers(targetId);
    
    // create an socket io instance to emit event
    const io = serverStore.getSocketServerInstance();
    
    // emit friend-requests event to all active users who received requests.
    receiverList.forEach((receiverSocketId)=>{
      id.to(receiverSocketId).emit("friend-requests", {
        pendingFriendsRequests: pendingRequests? pendingRequests: []
      })
    })

  } catch (error) {
    console.log("friends.js error: ", error)
  }
}

module.exports = updateFriendsPendingRequests