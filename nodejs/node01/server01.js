const express = require('express')
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan');
const app = express();
const port = 3000;
const _path = path.join(__dirname, './dist') // 경로를 합쳐줌
console.log(_path)
app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

app.get('/test', function(req,res) {
    res.send(req.query.id+"그리고"+req.query.name)
})
// 결과
// /test?id=123&name=양동원
// 123그리고양동원

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})