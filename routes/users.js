const express = require('express');
const router  = express.Router();
const User    = require('../controllers/userController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorizationAdmin')

router.get('/', User.findAll)
router.post('/', User.createUser)
router.put('/:id', User.updateUser)
router.delete('/:id', User.deleteUser)
router.post('/signup', User.register)
router.post('/signin', User.login)

module.exports = router;
