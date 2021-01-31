const usuario = require('./usuario')
const perfis = require('./perfis')

module.exports = {
    ...usuario,
    ...perfis
}