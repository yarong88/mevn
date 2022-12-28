const log = console.log
function *map(f, list) {
    for(const a of list) {
        yield f(a)
        // return f(a)
    }
}
const add = a => a +10
const a = [1,2,3]
const cusGen = map(add, a)
log(cusGen.next())
log('어떤 로직 1')
log(cusGen.next())
log('어떤 로직 2')
log(cusGen.next())
// 단계별로 value를 받을 수 있다. 원하는 단계까지.(done 될 때까지)