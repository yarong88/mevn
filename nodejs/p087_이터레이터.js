const a = ["사과", "딸기", "포도", "배"]
const it =a[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())