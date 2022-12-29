// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)
// import와 require 둘 다 쓰게 해주는, package.json 파일에 "type" : "module" 유무

const express = require('express');
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan');

const app = express();
const port = 3000;
const _path = path.join(__dirname, './dist') // 경로를 합쳐줌
console.log(_path)

app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})