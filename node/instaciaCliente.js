const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)

contadorB.inc()
contadorB.inc()
console.log(contadorB.valor)
console.log(contadorA === contadorB)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)

contadorD.inc()
contadorD.inc()
console.log(contadorD.valor)
console.log(contadorC === contadorD)