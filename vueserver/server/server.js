require('dotenv').config() // .env 사용하기 위해
const express = require('express')
const history = require('connect-history-api-fallback') // vue에서 새로고침 가능하게
const logger = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const VSchema = require('./mdb.cjs') // 몽고DB JS 불러오기

const { createProxyMiddleware } = require('http-proxy-middleware') // 프록시
app.use(
  createProxyMiddleware('./v1', {
    target: 'https://openapi.naver.com', // 프록시에 사용할 주소
    changeOrigin: true
  })
)

const _path = path.join(__dirname, '../dist')
console.log(_path)
app.use(history())
app.use('/', express.static(_path))
app.use(logger('tiny'))
// app.use(express.json()); // axios post로 받은 데이터 JSON 풀어주기
// app.use(express.urlencoded()) // middle웨어 사용
// 기본값으로는 json파서와 urlencoded 파서는 100kb만 파싱 할 수 있도록 설정
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ limit: '100mb', extended: false }))

// 몽고DB CRUD
// Create
app.post('/dbc', (req, res) => {
  const title = req.body.title
  const content = req.body.content
  const date = req.body.date
  console.log(req.body.date)
  ;(async () => {
    const _data = { title, content, date } // 최신문법 이름이 같으니, title:title 생략하여 title 하나만 입력
    const vs = new VSchema(_data)
    const t = await vs.save()
    console.log(t)
    res.send('저장완료')
  })()
})
// Read
app.get('/dbr/:date', (req, res) => {
  const date = req.params.date
  const read = async () => {
    const t = await VSchema.find({ date }, { _id: 0, __v: 0 })
      .lean()
      .then((t) => {
        res.send(t)
        console.log(t)
      })
  }
  read()
})
// Update
app.post('/dbu', (req, res) => {
  ;(async () => {
    const t = await VSchema.updateOne(
      {
        date: req.body.date
      },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          date: req.body.date
        }
      },
      { upsert: true }
    )
    console.log(t)
    res.send('수정완료')
  })()
})
// Delete
app.get('/dbd/:date', (req, res) => {
  const date = req.params.date
  const t = VSchema.deleteOne({ date: { $eq: date } }).then((t) => {
    res.send('삭제완료')
    console.log(t)
  })
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
