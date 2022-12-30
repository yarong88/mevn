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
    // _path 대신에 경로를 넣으면 저장하는 위치를 지정할 수 있다
  },
  filename: (req, res, cb) => {
    let on = res.originalname
    cb(null, on)
  }
})

let upload = multer({ storage: storage })

// let upload = multer({ dest: 'uploads/' })

app.post('/up', upload.single('ufile'), (req, res) => {
  console.log(req.file)
  res.send(
    `<script>alert("파일 업로드 완료");location.replace("index.html")</script>`
    // location.replace 가 왜 작동을 안하지?
  )
})

app.listen(port, () => {
  console.log(port + '로 연결되었습니다.')
})
