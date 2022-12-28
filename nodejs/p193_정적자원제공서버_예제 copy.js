const express = require('express');
const path = require('path')
const logger = require('morgan');

const app = express();
const port = 3000;
const _path = path.join(__dirname, './p000')
console.log(_path)

app.use('/', express.static(_path))
// 정적 접근 폴더 지정
app.use(logger('tiny'))
// 커스텀 미들웨어

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})