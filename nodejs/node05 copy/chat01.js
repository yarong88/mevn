const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')

const fs = require('fs')

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
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

app.post('/info', function (req, res) {
  res.send(
    `<script>alert("로그인 되었습니다.");location.href="./chatting.html"</script>`
  )
})

io.on('connection', (so) => {
  fs.readFile(_path + 'chat_history.txt', 'utf-8', (err, msg) => {
    if (err) throw err
    so.emit('chat history', msg)
  })

  so.emit('chat id')

  so.on('chat message', (msg) => {
    io.emit('chat message', msg)

    fs.stat(_path + 'chat_history.txt', (err, stats) => {
      if (stats) {
        fs.appendFile(_path + 'chat_history.txt', msg, (e) => {
          if (e) throw e
        })
      } else {
        fs.writeFile(_path + 'chat_history.txt', msg, (e) => {
          if (e) throw e
        })
      }
    })

    fs.readFile(_path + 'chat_history.txt', 'utf-8', (err, msg) => {
      if (err) throw err
    })
  })
})

server.listen(port, () => {
  console.log(port + '로 연결되었습니다.')
})
