const pessoa = {
    nome: "ana",
    idade: '33',
    endereco: {
        logradouro: 'dias davila',
        numero: 2912
    }
}

const { nome, idade} = pessoa

console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n , i)

const { sobrenome, telefone = true} = pessoa
console.log(sobrenome, telefone)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)