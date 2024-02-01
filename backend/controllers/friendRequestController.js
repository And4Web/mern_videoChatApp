const User = require("../models/user");
const FriendRequest = require("../models/friendRequest");
const updateFriendsPendingRequests = require('../socketHandlers/updates/friends');

const { friendRequestValidator } = require("../utils/validator");

exports.postFriendRequest = async (req, res) => {
  const {targetMail} = req.body;
  const senderMail = req.user.email;
  const {_id: senderId} = req.user;
  // console.log("sender, receiver: ", {senderMail, senderId}, req.user);
  
  // input validation:
  const { error, value } = friendRequestValidator(req.body);

  if (error) {
    const returnError = error.details.map((error) => {
      return error.message;
    });

    // console.log("JOI validation ERROR: ", returnError);
    return res
      .status(400)
      .json({ message: returnError, success: false});
  } 

  // if target user and sender is same
  if(targetMail.toLowerCase() === senderMail.toLowerCase()){
    // console.log("equal input and output")
    return res.status(409).json({success: false, message: "Cant send Request to yourself. Try different Email."})
  }

  // if target user is not found in our database
  const targetUser = await User.findOne({email: targetMail});
  if(!targetUser){
    return res.status(404).json({success: false, message: "This user is not found in our database"})
  }

  // if request already sent
  const requestAlreadyReceived = await FriendRequest.findOne({
    senderId: senderId,
    receiverId: targetUser._id
  })

  if(requestAlreadyReceived){
    return res.status(409).json({success: false, message: "Request has already been sent to this user."})
  }

  // if the targetUser is already in our friends list
  const usersAlreadyFriends = targetUser.friends.find(friendId=>{
    friendId.toString() === senderId.toString();
  })
  if(usersAlreadyFriends){
    return res.status(409).json({success: false, message: "This User is already added. Please check your friend's list."})
  }

  // Create new Request and save in database- FriendRequests collection:

  const newRequest = await FriendRequest.create({
    senderId: senderId,
    receiverId: targetUser._id
  })

  // If request has been successfully created we would like to update friend list

  // send pending request update to specific user

  updateFriendsPendingRequests(targetUser._id.toString())

  // response if everything is correct
    return res.status(201).json({ message: "Friend request sent", success: true, targetMail, senderMail });
  
};



exports.acceptFriendRequest = async (req, res) => {
  try {
    const {id} = req.body;
    // console.log("accepted", id)

    return res.status(200).json({success: true, message: "request accepted"})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: error.message})
  }
}
exports.rejectFriendRequest = async (req, res) => {
  try {
    const {id} = req.body;
    const {_id: userId} = req.user;
    // console.log(id, userId)

    // find requset in the collection by id
    const requestExists = await FriendRequest.exists({_id: id});
    // if request exists in the collecetion then delete it
    if(requestExists){
      await FriendRequest.findByIdAndDelete(id);
    }
    // after deleting update the collection with pending requests
    updateFriendsPendingRequests(userId);
    
    return res.status(200).json({success: true, message: "Request rejected"})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: error.message})
  }
}