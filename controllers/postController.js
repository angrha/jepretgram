const Post = require('../models/postModel')

class PostController {
  static findAll(req, res) {
    Post.find()
    .populate('userId')
    .then(posts => {
      res.status(200).json({
        message: 'list all post',
        posts: posts
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  //middleware(off)
  //multer(off)
  static addNewPost(req, res) {
    // if (!req.file.cloudStoragePublicUrl) {
    //   res.status(500).json({
    //     msg: `photo can't be empty`
    //   })
    // }

    let post = new Post({
      photo: req.file.cloudStoragePublicUrl || req.body.photo,
      caption: req.body.caption || '',
      // userId: req.decoded.id
    })

    post.save()
    .then(userPost => {
      res.status(200).json({
        message: 'add new post success',
        post: userPost
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static findDetailPost(req, res) {
    Post.findById(req.params.id)
    // .populate('userId')
    .then(userPost => {
      res.status(200).json({
        message : 'detail house',
        post : userPost
      })
    })
    .catch( err => res.status(500).send(err))
  }

  //middleware(off)
  static findUserPost(req, res) {
    Post.findOne({
      _id: req.params.id,
      // userId: req.decoded.id
    })
    // .populate('userId')
    .then(userPost => {
      res.status(200).json({
        message : 'your house',
        post : userPost
      })
    })
    .catch( err => res.status(500).send(err))
  }

  //middleware(off)
  static updatePost(req, res) {
    Post.findOne({
      _id : req.params.id,
      // userId : req.decoded.id
    })
    .then(post => {
      post.caption = req.body.caption || post.caption,

      post.save()
      .then(updatePost => {
        res.status(200).json({
          message : 'post updated!',
          post   : updatedPost
        })
      })
      .catch( err => {
        console.log(err)
        res.status(500).send(err)
      })
    })
    .catch( err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  //middleware off
  static deletePost(req, res) {
    Post.remove({
      _id : req.params.id,
      // userId: req.decoded.id
    })
    .then(() => {
      res.status(200).json({
        message : 'success deleted',
      })
    })
    .catch(err => res.status(500).send(err))
  }

}

module.exports = PostController