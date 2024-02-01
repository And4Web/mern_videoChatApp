const User = require("../../models/user");
const FriendRequest = require("../../models/friendRequest");
const serverStore = require("../../serverStore");

const updateFriendsPendingRequests = async (targetId) => {
  try {
    const pendingRequests = await FriendRequest.find({
      receiverId: targetId,
    }).populate("senderId", "_id email username");

    // find if user of specified targetId has active connections(is online?)!
    const receiverList = serverStore.getOnlineUsers(targetId);

    // create an socket io instance to emit event
    const io = serverStore.getSocketServerInstance();

    // emit friend-requests event to all active users who received requests.
    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friend-requests", {
        pendingFriendsRequests: pendingRequests ? pendingRequests : [],
      });

      // console.log(receiverSocketId)
    });
  } catch (error) {
    console.log("Update pending friend requests error: ", error);
  }
};

const updateFriends = async (userId) => {
  try {
    // find active connections of specific id (online users)
    const receiversList = serverStore.getOnlineUsers(userId);

    // 
    if (receiversList.length > 0) {
      const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
        "friends",
        "_id username email"
      );

      if (user) {
        const friendsList = user.friends.map((f) => {
          return {
            id: f._id,
            username: f.username,
            email: f.email,
          };
        });

        // get io server instance
        const io = serverStore.getSocketServerInstance();

        receiversList.forEach((receiverSocketId)=>{
          io.to(receiverSocketId).emit("friends-list", {
            friends: friendsList ? friendsList : []
          });

        })
      }
    }
  } catch (error) {
    console.log("Update friend list error: ", error);
  }
};

module.exports = {
  updateFriendsPendingRequests,
  updateFriends
}
