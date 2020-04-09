function calculadora(num1, operador, num2) {

    this.calcular = function () {
        switch (operador) {
            case '+':
                return num1 + num2
            case '-':
                return num1 - num2
            case '*':
                return num1 * num2
            case '/':
                return num1 / num2
            default:
                return 'Operação não é válida!'
        }
    }
}

console.log(new calculadora(2,'+',3).calcular())