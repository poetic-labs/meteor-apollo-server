import _ from 'lodash';
import TODOs from './stub-data.js';

const resolvers = {
  TodosSchema: {
    getStubTodos() {
      return TODOs;
    },
    createStubTodo(source, args) {
      let todo = Object.assign({}, args);

      todo.id = Math.random() * 9999999;

      TODOs.push(todo);

      return todo;
    },
    deleteStubTodo(source, { id }) {
      let todo = _.find(TODOs, (todo) => todo.id === id);

      if (todo) {
        _.remove(TODOs, (todoItem) => todoItem.id === id);
      } else {
        todo = { id: -1 }
      }

      return todo;
    },
    toggleStubTodoCompleted(source, { id }) {
      let returnTodo = { id: -1 };

      TODOs.forEach(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          returnTodo = todo;
        }
      })

      return returnTodo;
    },
    firebaseResolveFunction() {
      return firebase.getTodos();
    },
    googleSheetsResolveFunction() {
      return googleSheets.getTodos();
    }
  }
};

// Instagram Example
// import Instagram from '/imports/data/instagram-connector';

// const resolvers = {
  // Query: {
    // async data(root, { keywords }) {
      // return Instagram.getRecent(keywords);
    // }
  // }
// };

export default resolvers;

