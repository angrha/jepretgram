const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  photo: {
    type: String,
    require: [true, 'please insert photo first']
  },
  caption: String,
  like:[{
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  comment: [{
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post