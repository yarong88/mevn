let test =
  '안녕?나는양동원이야.오늘점심에는불고기를먹었어.오늘날씨는어때?내일날씨는어때?12345'
let test02 = ''
console.log(test.length)
if (test.length > 30) {
  test02 = test.slice(-30)
}
console.log(test)
console.log(test02)
console.log(test02.length)
