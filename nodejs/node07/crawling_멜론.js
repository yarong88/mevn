const axios = require('axios') // 리퀘스트 그 이상 용도
const cheerio = require('cheerio') // 선택자 용도

const url = 'https://www.melon.com/chart/index.htm'

axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  let song = []

  const time1 = $('.calendar_prid .year').text()
  const time2 = $('.calendar_prid .hour').text()
  console.log(time1, time2)
  $('.ellipsis.rank01').each(function () {
    song.push($(this).text())
  })
  song.forEach((v, i) => {
    if (i < 20) console.log(`${i + 1}위:${v.trim()}`)
  })
})
