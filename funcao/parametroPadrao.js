//estrategia de gerar valores padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}
console.log(soma1(),soma1(3), soma1(1,2,3), soma1(0,0,0))

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2())
console.log(soma2(1,5,9))
console.log(soma2(0,0,0))

//valor pardrao do es2015
function soma4(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma4(),soma4(2,6),soma4(0,0,0))