const express = require('express')
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan');
const app = express();
const port = 3000;
const _path = path.join(__dirname, './dist') // 경로를 합쳐줌
console.log(_path)
app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

app.get('/pw',function(req,res){
    res.send(
        `[비밀번호변경창]<br>
        ${req.query.id} 님 안녕하세요.<br>
        ${req.query.pw} 의 비밀번호를 수정하시겠습니까?<br>
        ${req.query.pw} ==> <a href="inf">변경</a>`
        // 패스워드 정보가 다 노출이 된다
    )
})

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})