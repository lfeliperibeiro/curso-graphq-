const { usuarios, perfis} = require('../data/db');

module.exports = {
    horaAtual() {
        return `A hora atual é ${new Date().getHours()}:${new Date().getMinutes()}`
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Carlos',
            email: 'email@email.com',
            idade: 32,
            salario_real: 3500.00,
            vip: true
        }
    },
    produtoEmDestaque(){
        return{
            nome: 'Computador',
            preco: 5000.00,
            desconto: 0.18
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
            .map(() => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }){
        const selections = usuarios.filter(user => user.id === id)
        return  selections ? selections[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }){
        const selectPerfil = perfis.filter(user => user.id === id)
        return selectPerfil  ? selectPerfil[0] : null
    }
}