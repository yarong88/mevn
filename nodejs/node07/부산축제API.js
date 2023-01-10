const request = require('request')
require('dotenv').config()

let key = process.env.bkey
const url =
  'http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=' +
  key +
  '&pageNo=4&numOfRows=4&resultType=json'
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getFestivalKr.item
  console.log(_)
})
