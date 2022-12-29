const express = require('express')
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan');
const app = express();
const port = 3000;
const _path = path.join(__dirname, './dist') // 경로를 합쳐줌
console.log(_path)
app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

app.get('/story', function(req, res) {
    const arr = ["my life is pretty","Egg is life", "Cute & I don't have cat", "Avengers are dead"]
    const pick = `
    <ul>
        <li><a href="/story?id=0">Pretty</a></li>
        <li><a href="/story?id=1">Egg</a></li>
        <li><a href="/story?id=2">Cat</a></li>
        <li><a href="/story?id=3">Avengers</a></li>
    </ul>
    <h2>${arr[req.query.id] ?? '선택하세요'}</h2>`
    res.send(pick)
    // res.send(arr[req.query.id])
})

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})