function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({max: 0, min: 11}))
console.log(rand({ min: 2}))
console.log(rand({}))
//console.log(rand())