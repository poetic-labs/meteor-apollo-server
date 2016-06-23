## Meteor Apollo Server

```js
npm install

meteor
```

Simple server to be consumed by an apollo client. Has instagram connector
example.

The schema determines which fields from the data that the server will send to the
client.

The TodosSchema (in imports/data/schema.js) has a fields tunction which returns
todos. In that todos field we declare our resolve function. Resolve handles the
incoming query. There are several example resolve function in
imports/data/resolvers.js. We will need one for each source of data that handles
the query and translates it into a data specific query.

The connector translates that resolve function/query into a call to a
datasource.

## Pattern:

We declare a schema for all our data which limits what can be
sent to the client. (schema) Then we connect to data sources and expose a method of getting data
(connectors). Using that connection we then resolve and handle the incoming
queries (resolve)

