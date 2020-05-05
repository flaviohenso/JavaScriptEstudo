const alunos = [
    { nome: 'Flavio', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Andreia', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(elem => elem.nota).reduce((somatorio,elemento) => somatorio += elemento)
console.log(resultado)