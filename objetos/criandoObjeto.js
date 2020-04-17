//usando a notacao literal
const obj1 = {}
console.log(obj1)
console.log(typeof obj1)

// Object em JS
console.log(typeof Object,typeof new Object)
const obj2 = new Object
console.log(obj2)
console.log(typeof obj2)

//Funcoes construtoras
function Produto(nome, preco, desconto){
    this.nome = nome //quando colocar p this esse atributo estara visivel fora da funcao, torna-se um atributo publico
    this.getPrecoDesconto = () => {
        return preco * (1 - desconto)
    }
}

const caneta = new Produto('caneta',1.99,0.1)
console.log(caneta.nome)
console.log(caneta.getPrecoDesconto())

//funcoes factory
function criarFuncionario (nome,salario,faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalarioComFaltas(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('flavio', 2500, 3)
const f2 = criarFuncionario('andreia', 2700, 4)

console.log(f1.getSalarioComFaltas())
console.log(f2.getSalarioComFaltas())

//object.create
const filha = Object.create(null)
filha.nome = 'flavio'
console.log(filha.nome)
console.log(typeof filha)


// uma funcao famosa que criar um objeto...
const fromJson = JSON.parse('{ "nome" : "Joao", "conjuge" : "Eliane" }')
console.log(fromJson)
console.log(typeof fromJson)