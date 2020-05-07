const URL = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtrar = (objeto) => {if(objeto.pais === 'China' && objeto.genero === 'F') return objeto}
const menorSalario = (acumulador,proximo) => acumulador.salario > proximo.salario ? proximo : acumulador

async function buscar() {
    try {
        const retorno = await axios.get(URL)
        let resultado = retorno.data.filter(funcionario => filtrar(funcionario)).reduce(menorSalario)
        console.log(resultado)
    } catch (error) {
        console.log(error)
        console.log('erro na requisicao')
    }
}



buscar()

