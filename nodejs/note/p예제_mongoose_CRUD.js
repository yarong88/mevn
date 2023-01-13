require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbtest2id
const PWD = process.env.dbtest2pw
const HOST = process.env.dbhost
const DB = 'test2'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
mongoose.set('strictQuery', false)
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
const Todo = require('./p349/todo.js')
module.exports = { mongoose, Todo }
