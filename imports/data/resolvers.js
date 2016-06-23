// stub data
const TODOs = [
  {
    "id": 1,
    "title": "Read emails",
    "completed": false
  },
  {
    "id": 2,
    "title": "Buy orange",
    "completed": false
  },
  {
    "id": 3,
    "title": "Buy Apple Products",
    "completed": false
  },
  {
    "id": 4,
    "title": "Walk cat",
    "completed": true
  }
];

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

