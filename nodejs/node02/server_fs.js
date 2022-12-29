const express = require('express')
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan');
const fs = require('fs') // 내장모듈
const app = express();
const port = 3000;
const _path = path.join(__dirname, './') // 경로를 합쳐줌
console.log(_path)
app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

// CRUD
const file = "test1"
const data = "와!"
fs.writeFile(_path+file+".txt",data,(e)=>{
    if(e)console.log(e)
    console.log("파일이 작성 완료되었습니다.")
})
// txt 파일을 생성하고 그 안에 data에 담긴 자료를 저장할 수 있다.

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})


