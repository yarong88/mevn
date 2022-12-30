const express = require('express')
const path = require('path')
const logger = require('morgan')
const { Server } = require('socket.io')
const app = express()

const http = require('http')
const server = http.createServer(app)
const io = new Server(server)

const port = 3000
const _path = path.join(__dirname, './')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

io.on('connection', (so) => {
  so.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

server.listen(port, () => {
  console.log(port + '로 연결되었습니다.')
})
