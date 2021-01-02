const { usuarios, nextId } = require('../data/db');

module.exports = {
    newUser(_, args) {
        const emailExist = usuarios
            .some(user => user.email === args.email)

        if(emailExist){
            throw new Error('Email já Extiste!')
        }

        const novo = {
            id: nextId(),
           ...args,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novo)
        return novo
    },
    deleteUser(_, { id }) {
        const index = usuarios
            .findIndex(user => user.id === id)

        if( index < 0) return null
        const deleted = usuarios.splice(index, 1)
        return deleted ? deleted[0] : null
    }
}