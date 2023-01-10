const request = require('request')
const dotenv = require('dotenv')
dotenv.config()
// .env에 자신의 공유하면 안될 값을 저장해놓고 그 값을 불러오는 방법
// dotenv 모듈을 설치하고 require('dotenv').config()로 .env와 연결한다.

const key = process.env.pkey
// 저장된 값을 불러온다.
const url =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
  key +
  // 그 값을 사용한다.
  '&pageNo=1&numOfRows=5&resultType=json'
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item
  console.log(_[3].site, _[3].co, _[3].o3, _[3].pm25, _[3].pm10)
})
