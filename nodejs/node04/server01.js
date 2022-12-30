const express = require('express')
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan')
const multer = require('multer')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/') // 경로를 합쳐줌
console.log(_path)
app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, _path)
  },
  filename: (req, res, cb) => {
    let fix = Buffer.from(res.originalname, 'latin1').toString('utf-8')
    cb(null, fix)
  }
})

let upload = multer({ storage: storage })

app.post('/up', upload.single('ufile'), (req, res) => {
  console.log(req.file)
  res.send(
    `<script>alert("파일 업로드 완료");location.replace("index.html")</script>`
  )
})

app.listen(port, () => {
  console.log(port + '로 연결되었습니다.')
})
