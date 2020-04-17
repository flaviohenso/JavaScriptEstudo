const sequencia = {
    _valor: 1, // _ é uma convenção
    get valor() { return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10125
console.log(sequencia.valor)
sequencia.valor = 10123
console.log(sequencia.valor)
console.log(sequencia._valor) //a convenção nao impede vc de acessar o atributo
