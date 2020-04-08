function operacaoMatematicas(a,b){
    console.log(`Soma: ${a + b}`)
    console.log(`Subtração: ${a - b}`)
    console.log(`Multiplicação: ${a * b}`)
    console.log(`Divisao: A = ${ a / b } B= ${ b / a }`)
}

operacaoMatematicas(2,2)

const operacaoMatematicasArrow = (a,b) => {
    console.log(`Soma: ${a + b}`)
    console.log(`Subtração: ${a - b}`)
    console.log(`Multiplicação: ${a * b}`)
    console.log(`Divisao: A = ${ a / b } B= ${ b / a }`)
}

operacaoMatematicasArrow(3,8);

(function (x,y) {
    console.log(`Soma: ${x + y}`)
    console.log(`Subtração: ${x - y}`)
    console.log(`Multiplicação: ${x * y}`)
    console.log(`Divisao: A = ${ x / y } B= ${ y / x }`)
})(4,4)