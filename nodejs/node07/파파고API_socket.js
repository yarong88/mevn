const { Server } = require('socket.io')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = new Server(server)

const port = 3000
const _path = path.join(__dirname, './')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

let request = require('request')
require('dotenv').config()

io.on('connection', (socket) => {
  socket.on('translate', (msg) => {
    const key = process.env.pkey
    const url =
      'http://apis.data.go.kr/6260000/BusanJobOpnngInfoService/getJobOpnngInfo?ServiceKey=' +
      key +
      '&pageNo=1&numOfRows=10&resultType=json'

    request(url, (e, res, body) => {
      const rst = JSON.parse(body)
      const _ = rst.getJobOpnngInfo.body.items.item
      console.log(_)
      io.emit('translate', msg + _)
    })
  })
})

server.listen(port, function () {
  console.log('translate app listening on port!')
})
