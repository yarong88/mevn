const request = require('request')
require('dotenv').config()
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
// xml을 JSON으로 변환
const parser = new XMLParser()

let key = process.env.bkey
let sname = encodeURI('서면')
const url =
  'http://apis.data.go.kr/6260000/BusanBIMS/busStopList?serviceKey=' +
  key +
  '&pageNo=4&numOfRows=4&bstopnm=' +
  sname
request(url, (e, res, body) => {
  const rst = parser.parse(body)
  // 사용 방법
  const _ = rst.response.body.items.item
  console.log(_)
})
