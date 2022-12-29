const express = require('express')
const path = require('path') // 경로를 활용할 수 있는 유틸
const logger = require('morgan');
const app = express();
const fs = require('fs');
const port = 3000;
const _path = path.join(__dirname, '/') // 경로를 합쳐줌
console.log(_path)
app.use('/', express.static(_path)) // 정적 접근 폴더 지정
app.use(logger('tiny')) // 커스텀 미들웨어

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.post('/info', function(req,res) {
    const id = req.body.iid
    const name = req.body.ipw
    const memo = req.body.idata
    console.log(id,name,memo)
    const file = "info"
    const data = id+", "+name+", "+memo+"\n"

    fs.stat(_path+id+'.txt',(err,stats) => {
        if (stats) {
            fs.appendFile(_path+id+".txt",data,(e)=>{
                if(e) throw e            
                res.send(`<script>alert("파일이 작성 완료되었습니다.");history.go(-1)</script>`)
            })
        } else {
            fs.writeFile(_path+id+".txt",data,(e)=>{
                if(e) throw e
                res.send(`<script>alert("파일이 작성 완료되었습니다.");history.go(-1)</script>`)
            })
        }
    })

    fs.readFile(_path+id+'.txt','utf-8',(err,data) => {
        if(err) throw err
        console.log(data)
    })
})

app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})