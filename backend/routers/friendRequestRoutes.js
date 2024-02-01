const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { postFriendRequest, acceptFriendRequest, rejectFriendRequest } = require('../controllers/friendRequestController');

router.post("/request", auth, postFriendRequest);

router.post("/accept", auth, acceptFriendRequest)
router.post("/reject", auth, rejectFriendRequest)


module.exports = router;