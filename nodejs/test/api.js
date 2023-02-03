let request = require('request')
require('dotenv').config()

const key = process.env.pkey
const url_dust =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
  key +
  '&pageNo=1&numOfRows=20&resultType=json'
const dust_message = ''
request(url_dust, (e, res, body) => {
  const rst = JSON.parse(body)
  const pm25 = rst.getAirQualityInfoClassifiedByStation.body.items.item[2].pm25
  const pm10 = rst.getAirQualityInfoClassifiedByStation.body.items.item[2].pm10
  dust_message = `현재 전포동의 미세먼지 수치는 ${pm25}이며 초미세먼지 수치는${pm10}입니다.`
})

export default [dust_message]

const axios = require('axios')
const cheerio = require('cheerio')

const url =
  'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202'

let menu = [],
  day = [],
  date = []

axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  $('.day').each(function () {
    day.push($(this).text())
  })
  $('.date').each(function () {
    date.push($(this).text())
  })

  let today = new Date()
  let days = today.getDay()

  for (i = 0; i <= 6; i++) {
    if (days - 1 == i) {
      $('tbody')
        .children('tr:eq(1)')
        .children(`td:eq(${i})`)
        .each(function () {
          menu.push($(this).text())
        })
      console.log(`오늘의 메뉴는 [${menu}] 입니다.`)
    }
  }
})
