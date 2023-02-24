const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vschema = new Schema({
  title: String,
  content: String,
  date: Date
})
module.exports = mongoose.model('vdb', Vschema, 'vdb')
