const { friendRequestValidator } = require("../utils/validator");

exports.postFriendRequest = async (req, res) => {
  // console.log("req.body: ", req.body);

  // input validation:
  const { error, value } = friendRequestValidator(req.body);
  
  // console.log("validator output: ", {error, value});

  if (error) {
    const returnError = error.details.map((error) => {
      return error.message;
    });
    console.log("JOI validation ERROR: ", returnError);
    return res
      .status(400)
      .json({ message: returnError, success: false});
  } else {
    return res.status(200).json({ message: "Friend request sent", success: true, targetMail: req.body.targetMail, sender: req.user.email });
  }
};
