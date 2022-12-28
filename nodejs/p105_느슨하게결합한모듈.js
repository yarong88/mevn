const cook = {
    create : recipe => recipe.start(),
    delete : food => food.delete()
}
const pasta = {
    start : () => console.log("파스타 요리가 시작됩니다."),
    delete : () => console.log("파스타 요리를 버립니다.")
}
const steak = {
    start : () => console.log("스테이크 요리가 시작됩니다.")
}
cook.create(pasta)
cook.create(steak)
cook.delete(pasta)