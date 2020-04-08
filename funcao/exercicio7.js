class Bhaskara {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }

    //Aprovado
    _delta() {
        return this.b ** 2 - 4 * (this.a * this.c)
    }

    calcular() {

        if (this.a != 0) {
            let delta = this._delta()
            if (delta < 0) {
                return `O valor de Delta = ${delta}, logo delta não terá valor reais`
            } else {

                let raiz = Math.sqrt(delta)
                let divisor = 2 * this.a

                let resultado = []
                resultado.push(this._calcularX1(raiz, divisor))
                resultado.push(this._calcularX2(raiz, divisor))

                return resultado
            }
        } else {
            return `O valor de A não pode ser 0(zero)!`
        }

    }

    _calcularX1(raiz, divisor) {
        return ((-1 * this.b) + raiz) / divisor
    }

    _calcularX2(raiz, divisor) {
        return ((-1 * this.b) + -raiz) / divisor
    }
}

console.log(new Bhaskara(2, 9, 7).calcular())