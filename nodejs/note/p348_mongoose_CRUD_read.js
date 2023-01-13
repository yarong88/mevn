const { mongoose, Photo } = require('./p346_mongoose_CRUD.js')
const main = async () => {
  const t = await Photo.findOne(
    {
      title: {
        $eq: '큰돌'
        // 비교연산자
        // eq=같다, neq=같지 않다, gt=크다, gte=크거나 같다, lt=작다, lte=작거나 같다
        // in=지정 값이 있다, nin= 지정 값이 없다
      }
      // url: {
      //   $eq: 'yjkko48@naver.com'
      // }
    },
    // 조건에 맞는 자료의
    {
      title: 1,
      _id: 0,
      url: 1
    }
    // 원하는 내용을 골라 볼 수 있다.
  ).lean()
  console.log(t)
}
main()
