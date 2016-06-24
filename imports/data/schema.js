import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import resolvers from './resolvers.js';

const TodoType = new GraphQLObjectType({
  name: 'todo',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Todo id'
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Todo title'
    },
    completed: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Flag to mark if the todo is completed'
    }
  })
});

const TodosSchema = new GraphQLObjectType({
  name: 'TodosSchema',
  description: "Root of the Todos Schema",
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      description: "Array of todos",
      // todosExampleResolveFunction should be replaced by the firebase or
      // google sheets resolve function declared in resolvers.js
      resolve: resolvers.TodosSchema.todosExampleResolveFunction
    }
  })
});

export default schema = new GraphQLSchema({
  query: TodosSchema,
})
  // mutation: MutationType
