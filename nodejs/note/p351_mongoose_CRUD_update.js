const { mongoose, Photo } = require('./p346_mongoose_CRUD.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $eq: '큰돌'
      }
    },
    {
      $set: {
        url: 'yjkko48@kakao.com'
      }
    },
    {
      upsert: true,
      multi: true,
      new: true
    }
  ).lean()
  console.log(t)
}
main()
