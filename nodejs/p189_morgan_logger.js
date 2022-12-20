const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = 3000

app.get('/', (req, res) => {
    res.send('이제 이곳은 제것입니다.')
})
app.use(logger('tiny'))
app.use((req, res, next) => {
    console.log('1 Time:', Date.now())
    next()
})
app.use((req, res, next) => {
    console.log('2 Time:', Date.now())
    next()
})

app.listen(PORT, () => {
    console.log(`서버가 생성되었습니다.${PORT}`)
})