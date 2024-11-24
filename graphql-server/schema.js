export const typeDefs = `#graphql
  enum ProjectStatus {
    ACTIVE
    COMPLETED
    ON_HOLD
  }

  enum Priority {
    HIGH
    MEDIUM
    LOW
  }

  type Project {
    id: ID!
    title: String!
    description: String
    status: ProjectStatus
    priority: Priority
  }

  type Query {
    projects(page: Int, status: Priority, priority: ProjectStatus): [Project]
  }

  type Mutation {
    addProject(title: String!, description: String, status: String, priority: String): Project
    changeProjectStatus(id: String!, status: String): Project
    deleteProject(id: String!): Project
  }
`;
