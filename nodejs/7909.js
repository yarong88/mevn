const express = require('express')
const logger = require('morgan');
const app = express()
const port = 3000

app.use('/', express.static('D://YDW//MEVN//nodejs//dist'))
app.use(logger('tiny'))
app.listen(port, () => {
    console.log(port+'로 연결되었습니다.')
})