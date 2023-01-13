const a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("물을 끓이고")
            resolve(1)
        }, Math.random()*1000)
    })
}
const b = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("라면을 뜯고")
            resolve(2)
        }, Math.random() *1000+2000)
    })
}
const c = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("면을 넣고")
            resolve(3)
        }, Math.random() *600+500)
    })
}
const d = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("스프를 뜯고")
            resolve(4)
        }, Math.random() *600+1000)
    })
}
const e = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("라면 끓이기")
            resolve(5)
        }, Math.random() *500+500)
    })
}
const f = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("라면 먹기")
            resolve(6)
        }, Math.random() *2000+2000)
    })
}
const z = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("물을 끓이고")
        resolve(1)
    }, Math.random()*1000)
})
const main = async () => {
    await a()
    await b()
    await c()
    await d()
    await e()
    await f()
}
main()
