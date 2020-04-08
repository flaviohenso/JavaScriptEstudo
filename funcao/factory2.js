function criarProduto(nome,tipo) {
    return {
        nome,
        tipo,
        desconto: 10
    }
}

console.log(criarProduto('mouse','informatica'))