//Funcao construtora
function triangulo(ladoA,ladoB,ladoC){

    this.validaTriangulo = function(){
        if( ladoA == ladoB && ladoA == ladoC){
            console.log('É um triangulo Equilatero!')
        } else if (ladoA == ladoB || ladoC == ladoA || ladoB == ladoC) {
            console.log('É um triangulo Isosceles!')
        }else {
            console.log('É um triangulo Escaleno')
        }
     }

}

new triangulo(0,0,0).validaTriangulo()

//classe
class Triangulo{
    constructor (a,b,c){
        this.a = a
        this.b = b
        this.c = c
    }

    validaTriangulo(){
        if( this.a == this.b && this.a == this.c){
            console.log('É um triangulo Equilatero!')
        } else if (this.a == this.b || this.c == this.a || this.b == this.c) {
            console.log('É um triangulo Isosceles!')
        }else {
            console.log('É um triangulo Escaleno')
        }
    }

} 

let tipoTriangulo = new Triangulo(3,5,1)
tipoTriangulo.validaTriangulo()