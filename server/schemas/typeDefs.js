const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    doctor: Doctor
  }

  type Doctor {
    _id: ID
    name: String
    email: String
    phone: String
    address: String
    department: String
  }

  type Query {
    me: User
    allDoctors: [Doctor]
    drName: Doctor
  }

  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDoctor(name: String, email: String, phone: String, address: String, department: String): Doctor
  }
`;

module.exports = typeDefs;
