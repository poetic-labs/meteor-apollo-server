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
      type: GraphQLInt,
      description: 'Todo id'
    },
    title: {
      type: GraphQLString,
      description: 'Todo title'
    },
    completed: {
      type: GraphQLBoolean,
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
      args: {
        message: {type: GraphQLString}
      },
      // todosExampleResolveFunction should be replaced by the firebase or
      // google sheets resolve function declared in resolvers.js
      resolve: resolvers.TodosSchema.todosExampleResolveFunction
    }
  })
});

const MutationType = new GraphQLObjectType({
  name: "BlogMutations",
  description: "Mutations of our blog",
  fields: () => ({
    createTodo: {
      type: TodoType,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        completed: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: function(source, args) {
        let todo = Object.assign({}, args);

        // Generate the _id
        todo._id = `${Date.now()}::${Math.ceil(Math.random() * 9999999)}`;

        // Add the Todo to the data store
        Todos.pudh(todo);

        // return the new post.
        return todo;
      }
    }
  })
});

export default schema = new GraphQLSchema({
  query: TodosSchema,
  mutation: MutationType
});
