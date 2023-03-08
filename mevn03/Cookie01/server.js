const http = require('http')
http
  .createServer((req, res) => {
    if (!req.headers.cookie) {
      res.writeHead(200, {
        'Set-Cookie': [
          'yummy_cookie=choco;Secure;HttpOnly',
          'tasty_cookie=strawberry',
          `Parmanent-cookies;Max-Age=${60 * 60}` // 쿠키 제한시간
        ]
      })
    }
    res.end('Cookie test!')
  })
  .listen(3000)
