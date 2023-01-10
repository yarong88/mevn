const express = require('express')
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan')
const app = express()
const port = 3000
const _path = path.join(__dirname, './') // 경로를 합쳐줌
console.log(_path)
app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

require('dotenv').config()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

let client_id = process.env.papago_id
let client_secret = process.env.papago_secret
app.post('/translate', function (req, res) {
  let api_url = 'https://openapi.naver.com/v1/papago/n2mt'
  let request = require('request')
  let query = req.body.idata
  let options = {
    url: api_url,
    form: { source: 'ko', target: 'en', text: query },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  }
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' })
      const rst = JSON.parse(body)
      console.log(rst)
      res.end(rst.message.result.translatedText)
    } else {
      res.status(response.statusCode).end()
      console.log('error = ' + response.statusCode)
    }
  })
})
app.listen(port, function () {
  console.log('http://127.0.0.1:3000/translate app listening on port 3000!')
})
