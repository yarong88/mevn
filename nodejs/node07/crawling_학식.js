const axios = require('axios')
const cheerio = require('cheerio')

const url =
  'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202'

axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  //   console.log(res.data)
  let menu = [],
    day = [],
    date = []
  $('.menu-tit01~p').each(function () {
    // console.log($(this).text())
    menu.push($(this).text())
  })
  $('.day').each(function () {
    // console.log($(this).text())
    day.push($(this).text())
  })
  $('.date').each(function () {
    // console.log($(this).text())
    date.push($(this).text())
  })
  //   console.log(menu)
  //   console.log(day)
  //   console.log(date)
  for (i in menu) {
    console.log(`${date[i]}, ${day[i]}요일에 메뉴는 ${menu[i]}입니다.`)
  }
})
