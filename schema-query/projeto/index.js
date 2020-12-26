const { ApolloServer, gql } = require('apollo-server');

const usuarios = [{
    id: 1,
    nome: 'joao',
    email: 'joao@email.com',
    idade: 37
},{
    id: 2,
    nome: 'paulo',
    email: 'paulo@email.com',
    idade: 28
},{
    id: 3,
    nome: 'ana',
    email: 'ana@email.com',
    idade: 25
},{
    id: 4,
    nome: 'carla',
    email: 'carla@email.com',
    idade: 21
}]

const typeDefs = gql`
    # Pontos de entrada da API
    scalar Date
    
    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }
    
    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float        
    }
    
    type Query {
        horaAtual: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int]!
        usuarios: [Usuario]!
    }
`

const resolvers = {
    Produto: {
        precoComDesconto(parent) {
            return parent.preco * (1 - parent.desconto)

        },
    },
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Query: {
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
                nome: 'Compultador',
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
        }

    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url })=> {
    console.log(`Executando em ${url}`);
})