const { Server } = require('socket.io')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = new Server(server)

const port = 3000
const _path = path.join(__dirname, '/dist')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

let name, toname, content
let idInfo = {}
io.on('connection', (socket) => {
  // console.log(socket.id)
  socket.on('chat', (msg) => {
    // console.log(msg)
    name = msg.id
    toname = msg.toid
    content = msg.message
    idInfo[name] = socket.id
    if (!toname) {
      console.log(idInfo)
      msg.whisper = false
      console.log(msg)
      io.emit('chat', msg) //보낼 내용
    } else {
      msg.whisper = true
      io.to(idInfo[toname]).emit('chat', msg) // 특정상대에게 보냄
      msg.towhisper = toname
      io.to(idInfo[name]).emit('chat', msg)
    }
    // 받을 내용
  })
})

server.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
