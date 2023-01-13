const asy1 = (message, ret) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            console.log(new Date())
            resolve(ret)
        }, 4000)
    })
}
const asy2 = (message, ret) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            console.log(new Date())
            resolve(ret)
        }, 2000)
    })
}

const pm = [asy1("비동기함수1발동", 1), asy2("비동기함수2발동", 2)]
Promise.all(pm)
    .then(data => {
        console.log(data)
    })