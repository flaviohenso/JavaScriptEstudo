function tag(nome,...partes){
    console.log(nome)
    console.log(partes)
    return 'Outra String'
}

const aluno = 'flavio'
const situacao = "Aprovado"
console.log(tag `${aluno} esta ${situacao}`)