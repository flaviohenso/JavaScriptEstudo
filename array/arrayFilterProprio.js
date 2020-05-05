Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            newArray.push(this[index])
        } else { continue }
    }

    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plático', preco: 18.99, fragil: false }
]

const funcFragil = elemento => elemento.fragil === true
const funcCaro = elemento => elemento.preco >= 500

let resultado = produtos.filter2(funcFragil).filter2(funcCaro)
console.log(resultado)