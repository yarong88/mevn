const log = console.log
function* gen() {
    // *를 치면 제너레이터 함수로 인식?
    yield 10
    if (false) yield 20
    yield 30
    return 90
    // return을 했으이 아래의 값은 어떻게 되나?
    yield 30
    // 실행 안됨
}
let iter = gen()
log(iter)
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())

log(...gen())
// 결과물 변환