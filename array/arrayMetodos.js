const pilotos = ['Massa','Alonso','Raikkonen','Vettel']

pilotos.pop() // remover o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remover o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no inicio do array
console.log(pilotos)

pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const novoArray = pilotos.slice(2)
console.log(novoArray)

const novoArray2 = pilotos.slice(1,4) //ultimo indice não inclusivo
console.log(novoArray2)