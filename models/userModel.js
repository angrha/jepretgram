const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : {
    type : String,
    required : true
  },
  password : {
    type :String,
    required : true
  },
  status:  {
    type: String,
    enum: ['admin', 'user']
  },
  myRumah : [{
    type : Schema.Types.ObjectId,
    ref : 'House'
  }]
})

const User = mongoose.model('User', userSchema);

module.exports = User