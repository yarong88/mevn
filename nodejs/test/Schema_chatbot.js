const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatBot = new Schema({
  key: String,
  text: String,
  url: String,
  imageId: String
})

module.exports = mongoose.model('chatBot', chatBot)
