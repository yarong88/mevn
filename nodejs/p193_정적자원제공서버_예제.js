const express = require('express');
const path = require('path')
const logger = require('morgan');
const app = express();
const port = 3000;
const _path = path.join(__dirname, './p193')
console.log(_path)
app.use('/', express.static(_path))
// 정적 접근 폴더 지정
app.use(logger('tiny'))
// 커스텀 미들웨어
app.use((req, res, next) => {
    console.log('요청이 왔네요~ 지나갑니다~')
    next()
})

app.get('/book/:bookName', (req, res) => {
    const {bookName} = req.params
    res.send(`안녕하세요, 홍철이네 서점입니다. ${bookName}을 주문하셨군요!`)
})

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})