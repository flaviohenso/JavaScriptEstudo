const valorPedido = (codigo, quantidade) => {

    if (!isNaN(codigo)) {
        switch (codigo) {
            case 100:
                return `O valor do pedido é R$ ${Number(parseFloat(quantidade * 3).toFixed(2)).toLocaleString('pt-BR')}`
            case 200:
                return `O valor do pedido é R$ ${Number(parseFloat(quantidade * 4).toFixed(2)).toLocaleString('pt-BR')}`
            case 300:
                return `O valor do pedido é R$ ${Number(parseFloat(quantidade * 5.50).toFixed(2)).toLocaleString('pt-BR')}`
            case 400:
                return `O valor do pedido é R$ ${Number(parseFloat(quantidade * 7.50).toFixed(2)).toLocaleString('pt-BR')}`
            case 500:
                return `O valor do pedido é R$ ${Number(parseFloat(quantidade * 3.50).toFixed(2)).toLocaleString('pt-BR')}`
            case 600:
                return `O valor do pedido é R$ ${Number(parseFloat(quantidade * 2.80).toFixed(2)).toLocaleString('pt-BR')}`

            default:
                'Produto não existe!'
        }
    }
}

console.log(valorPedido(500, 1.5))