require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'mdb'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify', false)
// 6.0버전 이후로 자동관리되므로 삭제
mongoose.set('strictQuery', false)
// 6.0버전 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
const Photo = require('./p343/photo.js')
const main = async () => {
  const t = await Photo.findOne({
    $or: [
      // 논리 연산자
      // $and = 서로 일치, $not = 서로 일치하지 않는, $or = 1개 이상 조건 일치할때
      // $nor = 1개 이상이 일치하지 않는 것을 찾음.
      {
        title: {
          $eq: '큰돌'
        }
      },
      {
        url: {
          $eq: 'yjkko48@naver.com'
        }
      }
    ]
  }).lean()
  console.log(t)
}
main()
