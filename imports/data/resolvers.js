import TODOs from './stub-data.js';

// example resolvers, depend upon connector logic
const resolvers = {
  TodosSchema: {
    todosExampleResolveFunction() {
      return TODOs;
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

