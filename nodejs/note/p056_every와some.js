const numbers= [1,3,5,4]
const isAllOdd = numbers.every(e=>e%2) // 모두, and 개념
const isSomeOdd = numbers.some(e=>e%2) // 일부, or 개념
console.log(isAllOdd,isSomeOdd) // false, true