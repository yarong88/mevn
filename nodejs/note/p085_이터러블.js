const a = ["사과", "딸기", "포도", "배"]
console.log(Symbol.iterator in a)
for(const b of a) console.log(b)