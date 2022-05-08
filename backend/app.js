const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const movieSchema = require('./schema/schema');
const resolvers = require('./resolver/resolver');

mongoose.connect('mongodb+srv://admin:1234@cluster0.vxmkk.mongodb.net/moviemaker?retryWrites=true&w=majority', {
})
.then(() => {
  console.log('Mongo DB conected');
})
.catch((err) => {
  console.log('error: ', err);
})

const schema = buildSchema(`
  type Query {
    name: String
  }
`)

const rootValue = {
  name: () => {
    return "Jhon Medina"
  }
}

// Seting Graphql
app.use('/graphql', graphqlHTTP({
  schema: movieSchema,
  graphiql: true,
  rootValue: resolvers
}))


app.get('/', (req, res) => {
  res.send('Request for de back')
})

app.listen(4200, () =>{
  console.log('Server on port 4200');
})