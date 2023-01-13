const express = require('express')
const app = express()
const loogger = require('morgan')
const port = 3000
app.use(loogger('tiny'))
const simple_module = require('./p192_컨트롤러설정하기02.js')
app.get('/', simple_module.intro)
app.get('/users/:userName/books/:bookName', simple_module.handleBook)

app.listen(port, ()=> {
    console.log(`서버가 생성되었습니다.${port}`)
})