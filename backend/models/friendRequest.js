const mongoose = require("mongoose");

const friendRequestSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
})

module.exports = mongoose.model("FriendRequest", friendRequestSchema);