const produto = {
    nome: 'Caneta Bic Preta',
    preco : 1.90,
    desconto: 0.05
}

function clone (object){
    return { ...object}
}


const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(`prod 1 ${produto.nome}`)
console.log(`prod 2 ${novoProduto.nome}`)