const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { postFriendRequest } = require('../controllers/friendRequestController');

router.post("/request", auth, postFriendRequest)


module.exports = router;