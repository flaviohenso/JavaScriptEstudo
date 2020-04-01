const soma = function(a,b){
    return a+b
}

const imprimirResultado = function(a,b,operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(2,2)
imprimirResultado(2,2, (a,b) => a*b)

const pessoa = {
    falar(){
        console.log('opa')
    }
}

pessoa.falar()