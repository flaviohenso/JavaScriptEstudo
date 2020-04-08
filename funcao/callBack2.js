const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//sem usar callBack
let notasBaixas = []
for (const key in notas) {
    if (notas[key] < 7) {
        notasBaixas.push(notas[key])
    }
}

console.log(notasBaixas)


//com callBack

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota = nota => nota < 7)
console.log(notasBaixas3)