const perfis = [
    { id: 1, nome: 'Usuario' },
    { id: 2, nome: 'Adm'}
]

const usuarios = [{
    id: 1,
    nome: 'joao',
    email: 'joao@email.com',
    idade: 37,
    perfil_id: 1,
    status: 'ATIVO'
},{
    id: 2,
    nome: 'paulo',
    email: 'paulo@email.com',
    idade: 28,
    perfil_id: 2,
    status: 'INATIVO'
},{
    id: 3,
    nome: 'ana',
    email: 'ana@email.com',
    idade: 25,
    perfil_id: 1,
    status: 'BLOQUEADO'
},{
    id: 4,
    nome: 'carla',
    email: 'carla@email.com',
    idade: 21,
    perfil_id: 2,
    status: 'ATIVO'
}]

module.exports ={ usuarios, perfis}

