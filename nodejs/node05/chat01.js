const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
// 소켓 서버를 받아 온다.
const io = new Server(server)
// 소켓 서버를 담는다.

const port = 3000
const _path = path.join(__dirname, './')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

io.on('connection', (so) => {
  // 서버에 connection을 수립(?)하고 callback 인자로 so(socket)을 받는다.
  so.on('chat message', (msg) => {
    // 클리이언트(서버?)로 부터 'chat message'이라는 이벤트명을 사용해 메세지를 전달받는다.
    io.emit('chat message', msg)
    // 클라이언트로 'chat message'이라는 이벤트명을 사용해 메세지를 전달한다.
  })
})

server.listen(port, () => {
  console.log(port + '로 연결되었습니다.')
})
