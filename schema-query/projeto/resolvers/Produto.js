module.exports = {
    precoComDesconto(parent) {
        return parent.preco * (1 - parent.desconto)

    },
}