const alunos = [
    { nome: 'Flavio', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Andreia', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(elem => elem.bolsista)
.reduce((anterior,atual) => {
    console.log(anterior,atual)
    return anterior && atual})
console.log(resultado)

const saida = alunos.map(elem => elem.bolsista)
.reduce((resultado,atual) => resultado || atual)

console.log(saida)
