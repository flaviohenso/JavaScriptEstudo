const arr = []

console.log(typeof arr)

let aprovados = new Array('Bia','flavio','andreia')

console.log(aprovados)

aprovados = ['Andreia','Bia','Flavio']

console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Fabio'
console.log(aprovados[3])
aprovados.push('Eliane')
console.log(aprovados)
console.log(aprovados.length)
aprovados[9] = 'joao'
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[2]
console.log(aprovados)
console.log(aprovados.length)

aprovados = ['Andreia','Bia','Flavio']

console.log(aprovados)
aprovados.splice(1,1,'elemento01','elemento02') // exclui e adiciona elementos mo array
console.log(aprovados)