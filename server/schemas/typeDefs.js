const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Exercise {
    _id: ID
    name: String
    description: String
    image: String
    demo: String
    mgroup: String
    category: Category
  }

  type Routine {
    _id: ID
    workoutDate: String
    name: String
    reps: Int
    sets: Int
    weight: Int
    exercises: [Exercise]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    routines: [Routine]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    exercises(category: ID, name: String): [Exercise]
    exercise(_id: ID!): Exercise
    user: User
    routines: [Routine]
    routine(_id: ID!): Routine
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addRoutine(exercises: [ID]!): Routine
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateExercise(_id: ID!, quantity: Int! rep: Int! weight: Int!): Exercise
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;