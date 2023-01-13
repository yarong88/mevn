
// before ES5
function a(){
    return 1
}
console.log(a())

// after ES6
const b =_=> 1
console.log(b())

const c = (b = 2) => b
console.log(c())