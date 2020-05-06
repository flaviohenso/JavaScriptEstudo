const alunos = [
    { nome: 'Flavio', nota: 8.5 },
    { nome: 'Fabio', nota: 7.5 }
]

// Modo Imperativo

let total1 = 0 
for (let index = 0; index < alunos.length; index++) {
    total1 += alunos[index].nota
}

console.log(total1 / alunos.length)

//modo Declarativo

const soma = (total,atual) => total += atual
const getNotas = elemento => elemento.nota

const resultado = alunos.map(getNotas).reduce(soma) / alunos.length