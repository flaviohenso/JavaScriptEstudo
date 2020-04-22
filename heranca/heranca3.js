const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia', writable: false, enumerable: true
    }
})

console.log(filha2.nome)
filha2.nome = 'Michelle'
console.log(filha2)
console.log(`${filha2.nome} e cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha2))
console.log(Object.keys(filha1))

for (let key in Object.keys(filha2)) {
    filha2.hasOwnProperty(key) ?
        console.log(key) :
        console.log(`Por heranca: ${key}`)

}