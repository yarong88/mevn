const { mongoose, Photo } = require('./p346_mongoose_CRUD.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $in: ['큰돌']
      }
    },
    {
      $push: {
        something: { $each: [1, 2, 3] }
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
