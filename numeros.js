const peso1 = 1.5
const peso2 = Number('2.0')

let avaliacao1 = 6.89
let avaliacao2 = 9.78

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / peso1 + peso2

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString(2)) //converte em binario