const carrinho = ['{ "nome": "Borracha", "preco": 3.45}',
                  '{ "nome": "Caderno", "preco": 13.90 }',
                  '{ "nome": "Kit de lpais", "preco": 41.22}',
                  '{ "nome": "Caneta", "preco": 7.50}'
                ]

let resultado = carrinho.map(elemento => {
    return JSON.parse(elemento).preco
})

console.log(resultado)