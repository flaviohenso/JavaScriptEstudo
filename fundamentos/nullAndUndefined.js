let valor

console.log(valor)

valor = null
console.log(valor)

const produto = {}

console.log(produto.preco)
console.log(produto)
produto.preco = 8.9

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

//delete produto.preco
console.log(produto.preco)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)