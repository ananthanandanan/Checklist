const express = require('express');
const app = express();
const PORT = 6969;

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () =>
    console.log(`The server has started..... at port ${PORT}`)
);