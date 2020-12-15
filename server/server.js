const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,  
  // This ensures that every request performs an authentication check. If there is a token and it is verified, a creator object will be added to context and the updated request object will be passed to the resolvers as the context
  context: authMiddleware
});

// integrate Apollo server with the Express application as middleware
server.applyMiddleware({ app });

// set up express middleware to recognize incoming POST or PUT requests as JSON, strings, or arrays
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static image assets from specified path
app.use('/images', express.static(path.join(__dirname, '../client/images')));

// no client server in production so serve from build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// once database connection is made, start server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
