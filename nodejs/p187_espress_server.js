const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/main', (req, res) => {
    res.send('welcom main!')
})
app.get('/main/login', (req, res) => {
    res.send('login!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})