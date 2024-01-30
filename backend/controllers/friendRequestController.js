const User = require("../models/user");
const FriendRequest = require("../models/friendRequest");

const { friendRequestValidator } = require("../utils/validator");

exports.postFriendRequest = async (req, res) => {
  const {targetMail} = req.body;
  const senderMail = req.user.email;
  // console.log("sender, receiver: ", {senderMail, targetMail});
  
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
  

  // response if everything is correct
    return res.status(200).json({ message: "Friend request sent", success: true, targetMail: req.body.targetMail, sender: req.user.email });
  
};
