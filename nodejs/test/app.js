require('dotenv').config()
const { Server } = require('socket.io')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = new Server(server)

const port = 3000
const _path = path.join(__dirname, './dist')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

let client_id = process.env.papago_id
let client_secret = process.env.papago_secret
let api_url = 'https://openapi.naver.com/v1/papago/n2mt'
let request = require('request')

io.on('connection', (socket) => {
  socket.on('translate', (msg) => {
    let options = {
      url: api_url,
      form: { source: 'ko', target: 'en', text: msg },
      headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret
      }
    }
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // msg.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' })
        const rst = JSON.parse(body)
        console.log(rst)
        // res.end(rst.message.result.translatedText)
        io.emit('translate', rst.message.result.translatedText)
      } else {
        // res.status(response.statusCode).end()
        console.log('error = ' + response.statusCode)
      }
    })
  })
})

server.listen(port, function () {
  console.log('translate app listening on port!')
})
