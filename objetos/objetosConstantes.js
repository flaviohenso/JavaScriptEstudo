// const: nao pode alterar o endereço de memória
const pessoa = {
    nome: 'flavio'
}

console.log(pessoa.nome)

pessoa.nome = 'andreia'

console.log(pessoa.nome)

//tentando mudar o endereco de memoria de pessoa
//pessoa = {nome : 'maria'}

//congela todo o objeto, não pode alterar nenhum atributo
Object.freeze(pessoa)
pessoa.nome = 'fabio'
console.log(pessoa.nome)
delete pessoa.nome
console.log(pessoa.nome)

//já cria um objeto cosntante e congelado
const pessoaConstante = Object.freeze({ nome : 'batista' })
console.log(pessoaConstante.nome)
pessoaConstante.nome = 'eliane'
console.log(pessoaConstante.nome)
