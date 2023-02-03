require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'mdb'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify', false)
// 6.0버전 이후로 자동관리되므로 삭제
mongoose.set('strictQuery', false)
// 6.0버전 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
const Sensor = require('./p360/sensor.js')
module.exports = { mongoose, Sensor }

const csvFilePath = './p360/sensor.csv'
const csv = require('csvtojson')
const path = require('path')
const _path = path.join(__dirname, csvFilePath)
// const Sensor = require('./p360/sensor.js')
const main = async () => {
  const sensorList = await csv().fromFile(_path)
  console.log(sensorList)
  Sensor.insertMany(sensorList, function (error, docs) {
    console.log('데이터 삽입완료')
  })
}
main()
