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
import TODOs from './stub-data.js';

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
      resolve: resolvers.TodosSchema.getStubTodos
    }
  })
});

const MutationType = new GraphQLObjectType({
  name: "TodoMutations",
  description: "Mutations of our todo list",
  fields: () => ({
    createTodo: {
      type: TodoType,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        completed: {type: new GraphQLNonNull(GraphQLBoolean)}
      },
      resolve: resolvers.TodosSchema.createStubTodo
    },
    deleteTodo: {
      type: TodoType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve: resolvers.TodosSchema.deleteStubTodo
    },
    toggleTodoCompleted: {
      type: TodoType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve: resolvers.TodosSchema.toggleStubTodoCompleted
    },
  })
});

export default schema = new GraphQLSchema({
  query: TodosSchema,
  mutation: MutationType
});
