const request = require('request')

const url = process.env.Aurl

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item
  console.log(_[3].site, _[3].co, _[3].o3, _[3].pm25, _[3].pm10)
})
