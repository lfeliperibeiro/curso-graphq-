const { ApolloServer, gql } = require('apollo-server');

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