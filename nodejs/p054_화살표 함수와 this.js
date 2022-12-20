// function arrow(){
//     setTimeout(()=>{
//         console.log(this)
//     },1000)
// }
// function not_arrow(){
//     setTimeout(function(){
//         console.log(this)
//     },1000)
// }
// const p1 = new not_arrow()
// const p2 = new arrow()

const func1 = (e, index) => {
    console.log(`${index}번째 요소는 ${e}입니다.`)
}
[1,2,3,4,5].forEach(func1);
const a = [1,2,3,4,5].forEach(func1);
console.log(a)