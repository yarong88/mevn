const { mongoose, Photo } = require('./p346_mongoose_CRUD.js')
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
