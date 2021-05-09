const express = require('express');
const { update } = require('../controllers/userController')
const router = express.Router();
const {auth}=require('../middleware/auth')
const { validate } = require('../validation/index')
const { rules: updateRules } = require('../validation/user/update')
const {userFile} = require('../middleware/fileUpload')

router.post('/update',[auth,userFile,updateRules,validate], update)


module.exports = router;