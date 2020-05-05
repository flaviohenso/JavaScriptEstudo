const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plático', preco: 18.99, fragil: false }
]

const funcFragil = elemento => elemento.fragil === true
const funcCaro = elemento =>  elemento.preco >= 500

let resultado = produtos.filter(funcFragil).filter(funcCaro)
console.log(resultado)