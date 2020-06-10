import React from 'react';
import ApolloClient  from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks';

import { BookList, AddBook} from "./components";

// Apollo Client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList /> 
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
