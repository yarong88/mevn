const express = require('express')
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan');
const app = express();
const port = 3000;
const _path = path.join(__dirname, './') // 경로를 합쳐줌
console.log(_path)
app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
// 데이터 보내는 형식의 차이때문에 오류가 떴던 것일까?

app.post('/info', function(req,res) {
    const id = req.body.iid
    const name = req.body.ipw
    const memo = req.body.idata
    console.log(id,name,memo)
    res.send('확인되었습니다.')
})

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})
