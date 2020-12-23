const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    # Pontos de entrada da API
    type Query {
        nome: String!
    }
`

const resolvers = {
    Query: {
        nome() {
            return 'Luiz Felipe'
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