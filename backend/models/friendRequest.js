const mongoose = require("mongoose");

const friendRequestSchema = new mongoose.Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
})

module.exports = mongoose.model("FriendRequest", friendRequestSchema);