module.exports.intro = (req, res) => {
    res.send(`Express의 param을 이용한 쿼리스트링 값 가져오기`)
}
module.exports.handleBook = (req, res) => {
    let u_name = req.param('name')
    let b_name = req.param('bname')

    console.log(u_name, b_name)
    res.send('유저내임:' + u_name, ' 도서명:' + b_name)
}