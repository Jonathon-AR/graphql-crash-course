import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import db from "./_db.js";
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    projects() {
      return db.projects;
    },
    project(_, args) {
      return db.projects.find((project) => project.id === args.id);
    },
  },
  Mutation: {
    addProject(_, { title, description, status, priority }) {
      let project = {
        id: Math.floor(Math.random() * 10000).toString(),
        title,
        description,
        status,
        priority,
      };
      db.projects.push(project);
      return project;
    },
    deleteProject(_, args) {
      db.projects = db.projects.filter((g) => g.id !== args.id);
      return db.projects;
    },
    changeProjectStatus(_, args) {
      db.projects = db.projects.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.status };
        }
        return g;
      });
      return db.projects.find((g) => g.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server);
