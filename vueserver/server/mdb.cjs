const mongoose = require('mongoose')
const Vschema = require('./schema.cjs')
// require('dotenv').config()
// const USER = process.env.vueid
// const PWD = process.env.vuepwd
// const HOST = process.env.vuehost
// const DB = 'vuedb'
// const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
const mongodbURL = `mongodb://vue:12345@127.0.0.1:27017/vuedb`
// mongoose.set('useFindAndModify', false)
// 6.0버전 이후로 자동관리되므로 삭제
mongoose.set('strictQuery', false)
// 6.0버전 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
module.exports = Vschema
