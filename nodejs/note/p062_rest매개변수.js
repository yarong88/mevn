/* 나머지 매개변수 */
const a = (b, ...rest)=>{ //
console.log(rest)
}
a(1,2,3) // [ 2, 3 ]

const c = [1,2,3]
const a2 = (a,b,c)=>console.log(a,b,c)
a2(...c)

const a3 = [1,2,3,4,5]
const [head,...rest] = a3
console.log(head,rest) // 1 [ 2, 3, 4, 5 ]

/* 배열통합 */
const aa = [1,2,3]
const bb = [4,5,6]
const cc = [...aa,...bb]
console.log(cc) // [ 1, 2, 3, 4, 5, 6 ]

/* Max 함수 사용 */
const ma = [1,2,3,4]
console.log(Math.max(...ma)) // 4

/* 객체복사 */
const oa = {'name':'홍길동','age':'20'}
const ob = {...oa,'key':'1'}
console.log(ob)
