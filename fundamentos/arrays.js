const valores = [7.7,8.4,7.9,10.0]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 4.4
console.log(valores[4])

valores[10] = 1.1
console.log(valores)

console.log(valores.length)

valores.push({id: 3}, 'teste', false, null)
console.log(valores)

console.log(valores.pop())
console.log(valores)

console.log(typeof valores)