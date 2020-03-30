const notas = [6.7,7.4,9.8,8.1,7.7]

for (let i in notas) {
    //if (notas.hasOwnProperty(i)) {
        console.log(i,notas[i])
    //}
}

const pessoa = {
    nome: 'Flavio',
    idade: 33,
    peso: 82
}

for (let key in pessoa) {
    if (pessoa.hasOwnProperty(key)) {
        console.log(key,pessoa[key])
    }
}
