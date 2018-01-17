const router = require('express').Router()
const Post   = require('../controllers/postController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorizationAdmin')

router.get('/', Post.findAll)
router.post('/', Post.addNewPost)
router.get('/:id', Post.findDetailPost)
router.get('/:id/user', Post.findUserPost)
router.put('/:id', Post.updatePost)
router.delete('/:id', Post.deletePost)

module.exports = router