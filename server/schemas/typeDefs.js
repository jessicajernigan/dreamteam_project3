const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Vibe {
    _id: ID
    name: String
  }

  type Creator {
    _id: ID
    username: String
    email: String
    stageName: String
    imgUrl: String
    location: String
    bio: String
    vibes: [Vibe]
  }

  type Auth {
  token: ID
  creator: Creator
}

  type Query {
    creator: Creator
    vibes: [Vibe]
    creators(vibe: ID, name: String): [Creator]
  }

  type Mutation {
    addCreator(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }


`;

module.exports = typeDefs;


// type User {
//   _id: ID
//   firstName: String
//   lastName: String
//   email: String
// }

// type Creator {
//   _id: ID
//   name: String
//   imgUrl: String
//   location: String
//   bio: String
//   vibes: [Vibe]
// }



// type Category {
//   _id: ID
//   name: String
// }


// type Product {
//   _id: ID
//   name: String
//   description: String
//   image: String
//   quantity: Int
//   price: Float
//   category: Category
// }

// type Order {
//   _id: ID
//   purchaseDate: String
//   products: [Product]
// }

// type Checkout {
//   session: ID
// }

// type Auth {
//   token: ID
//   user: User
// }

// type Query {
//   products(category: ID, name: String): [Product]
//   product(_id: ID!): Product
//   user: User
//   order(_id: ID!): Order
//   checkout(products: [ID]!): Checkout
// }

// type Mutation {
//   addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//   addOrder(products: [ID]!): Order
//   updateUser(firstName: String, lastName: String, email: String, password: String): User
//   updateProduct(_id: ID!, quantity: Int!): Product
//   login(email: String!, password: String!): Auth
// }
