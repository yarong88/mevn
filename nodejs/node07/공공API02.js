const request = require('request')

const key = process.env.pkey

const url =
  'http://apis.data.go.kr/6260000/BusanJobOpnngInfoService/getJobOpnngInfo?ServiceKey=' +
  key +
  '&pageNo=1&numOfRows=10&resultType=json'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getJobOpnngInfo.body.items.item
  console.log(_)
})
