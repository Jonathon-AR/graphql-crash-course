export const typeDefs = `#graphql
  type Project {
    id: ID!
    title: String!
    description: String
    status: String
    priority: Strings
  }

  type Query {
    projects(page: Int, status: String, priority: String): [Project]
    project(id: String!): Project 
  }

  type Mutation {
    addProject(title: String!, description: String, status: String, priority: String): Project
    changeProjectStatus(id: String!, status: String): Project
    deleteProject(id: String!): Project
  }
`;
