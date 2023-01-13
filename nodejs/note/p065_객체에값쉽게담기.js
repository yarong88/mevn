const d = ()=>{return{"name":"홍길동","job":"의적"}}
const dd = ()=>({"name":"홍길동","job":"의적"}) //위와같음

const {name} = d()
console.log(name) // 홍길동

const a2 = [1,2]
const [b,c] = a2
console.log(b,c) // 1 2

const a3 = {"Name":"돈까스","소스":"기본"}
const {Name , 소스} = a3
console.log (Name , 소스) // 돈까스 기본



