const axios = require('axios') // 리퀘스트 용도
const cheerio = require('cheerio') // 선택자 용도

const url =
  'https://search.naver.com/search.naver?ie=UTF-8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84&sm=chr_hty'

axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  let song = []

  $('.tit_area').each(function () {
    song.push($(this).text())
  })
  song.forEach((v, i) => {
    console.log(`${i + 1}위: ${v}`)
  })
})
