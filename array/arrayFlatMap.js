const escola = [ {
    nome: 'Turma 1',
    alunos: [ {
        nome: 'Gustavo',
        nota: 6.1
    },
    {
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turmaa 2',
    alunos: [{
        nome: 'Flavio',
        nota: 9.5
    },{
        nome: 'Fabio',
        nota: 10
    }]
}]

const getNotasPorAluno = alunos => alunos.nota
const getNotasPorTurma = turma => turma.alunos.map(getNotasPorAluno)

const notas1 = escola.map(getNotasPorTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

console.log(escola.flatMap(getNotasPorTurma))