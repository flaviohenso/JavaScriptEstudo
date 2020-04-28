//Object.preventExtensions
const produto = Object.preventExtensions ({
    nome: "caneta", preco: 1.99, tag: "promoção"
})

console.log(produto)

console.log(Object.isExtensible(produto))

produto.nome = "lapis"
produto.descricao = "Lapis de cor"
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = Object.seal({
    nome: "flavio", fone: "988796047", idade: '33'
})

console.log(pessoa)

console.log(Object.isSealed(pessoa))

pessoa.nome = 'Andreia Michelle'
delete pessoa.idade
pessoa.sexo = 'feminino'

console.log(pessoa)

//Object.freeze = selado + valores constantes