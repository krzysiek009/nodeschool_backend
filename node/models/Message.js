const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ObjectId = mongoose.ObjectId;

const messageSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  editDate: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
