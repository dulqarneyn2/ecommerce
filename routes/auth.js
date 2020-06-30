
const express = require('express');
const router = express.Router();

const {sighnup,signin,signout} = require('../Controllers/auth')
const {userSignupValidator}= require('../validator/index')

router.post('/signup', userSignupValidator,sighnup);
router.post('/signin', signin)
router.post('/signout', signout)

module.exports=router;