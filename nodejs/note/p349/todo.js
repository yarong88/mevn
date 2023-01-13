const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  _id: String,
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean
})

module.exports = mongoose.model('Todo', TodoSchema)
