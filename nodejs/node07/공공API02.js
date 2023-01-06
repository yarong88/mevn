const request = require('request')

const url =
  'http://apis.data.go.kr/6260000/BusanJobOpnngInfoService/getJobOpnngInfo?ServiceKey=RiNAQ0%2BCOnYpoFRmGyXZhOKWCc7rFQkB7oa7WD2o%2F%2BVF83WlzVvsv3M%2FdRaXokV9cMx1k6YUE2boV0QF0lvqUw%3D%3D&pageNo=1&numOfRows=10&resultType=json'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getJobOpnngInfo.body.items.item
  console.log(_)
})
