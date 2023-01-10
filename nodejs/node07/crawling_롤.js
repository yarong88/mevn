const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.melon.com/new/index.htm'

axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  // console.log(res.data)
  let song = []
  //   day = [],
  //   date = []
  $('.ellipsis.rank01').each(function () {
    song.push($(this).text())
  })
  song.forEach((v, i) => {
    if (i < 50) console.log(`${i + 1}위:${v.trim()}`)
  })
  // $('.day').each(function () {
  // console.log($(this).text())
  //   day.push($(this).text())
  // })
  // $('.date').each(function () {
  // console.log($(this).text())
  //   date.push($(this).text())
  // })
  //   console.log(menu)
  //   console.log(day)
  //   console.log(date)
  // for (i in menu) {
  //   console.log(`${date[i]}, ${day[i]}요일에 메뉴는 ${menu[i]}입니다.`)
  // }
})
