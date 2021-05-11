const express = require('express');
const { index,create,messages, deleteChat } = require('../controllers/chatController')
const router = express.Router();
const {auth}=require('../middleware/auth')


router.get('/',[auth], index)
router.post('/create',[auth], create)
router.post('/messages',[auth], messages)
router.delete('/:id',[auth], deleteChat)


module.exports = router;