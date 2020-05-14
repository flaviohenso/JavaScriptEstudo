//nao aeita repetição/não indexada
const times = new Set()
times.add('Flamengo')
times.add('Vasco').add('Palmeiras').add('Fluminense').add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
console.log(times.has('flamengo'))
console.log(times.delete('Vasco'))
console.log(times)

const nomes = [ 'Flavio','Fabio','Andreia','dora','Eliane','Fabio']
const listaSet = new Set(nomes)
console.log(listaSet)
console.log(typeof listaSet)