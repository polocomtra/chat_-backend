const express = require('express');
const { index } = require('../controllers/chatController')
const router = express.Router();
const {auth}=require('../middleware/auth')


router.get('/',[auth], index)


module.exports = router;