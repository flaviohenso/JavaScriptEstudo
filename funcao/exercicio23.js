const notas = [5, 4, 5]

const limiteLaco = 10
let i = numeroAleatorio(limiteLaco)
while (i >= 0) {
    mediaPonderada(i, notas)
    i = numeroAleatorio(limiteLaco)
}

function mediaPonderada(codigo, notas) {
    //mp= (x1*p1) + (x2*p2) + (x3*p3)/ p1 + p2 + p3

    let notasOrdenadas = ordenaNotas(notas)

    console.log(notasOrdenadas)
    let mp = ((notasOrdenadas[0] * 4) + (notasOrdenadas[1] * 3) + (notasOrdenadas[2] * 3)) / (4 + 3 + 3)


    console.log(`Código do aluno: ${codigo}, suas notas foram: ${notas}, sua média é: ${mp}, logo vc esta ${mp >= 5 ? 'Aprovado' : 'Reprovador'}`)
}

function ordenaNotas(notas) {
    let ordemNotas = []

    ordemNotas.push(Math.max.apply(null, notas))
    let indice = notas.indexOf(ordemNotas[0])
    if (indice === notas.length - 1) {
        ordemNotas.push(notas[0])
        ordemNotas.push(notas[1])
    } else if (indice === notas.length - 2) {
        ordemNotas.push(notas[0])
        ordemNotas.push(notas[2])
    } else {
        ordemNotas.push(notas[1])
        ordemNotas.push(notas[2])
    }
    return ordemNotas
}

function numeroAleatorio(limite) {
    return Math.floor(Math.random() * 20) - limite
}