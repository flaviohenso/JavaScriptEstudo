const pessoa = {
    nome: 'rebeca',
    idade: 33,
    peso: 84
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(chave,valor)
});

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: false, //se true é exibida no Object.keys
    writable: false, //se true pode ser alterado o valor
    value: '01/01/2019'
})

console.log(pessoa)

pessoa.dataNascimento = '01/02/2020'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign ecmascript 2015
const dest = { a:1}
const o1 = { b:2 }
const o2 = { c:3, a:4 }
Object.assign(dest, o1, o2)

console.log(dest)