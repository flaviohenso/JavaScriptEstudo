
//criar de forma literal
function fun1(){
    return 'Função 1'
}

//armazena funcao em variavel
const fun2 = function () {

}

//armazena em array
const array = [function (a,b) {return a + b},fun1,fun2]
console.log(array[0](1,4))

//armazenar em objeto
const obj = {
    media: function (nota1,nota2) {
        return (nota1 + nota2)/2
    }
}
obj.status = function(media){
    if(media > 7){
        return 'Aprovado!'
    }else if(media < 7 && media > 6){
        return 'Recuperacao!'
    }else{
        return 'Reprovado!'
    }
}

console.log(obj.media(7.6,3.4))
console.log(obj.status(8))
console.log(obj.status(6.5))
console.log(obj.status(3))

//Passar funcao como paramatro
function run(fun1){
    return fun1()
}

console.log(run(function(){
    return 3+6
}))

//funcao pode retornar/onter uma funçao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(4,4)(2)
const funcaoRetorno = soma(4,4)
funcaoRetorno(2)