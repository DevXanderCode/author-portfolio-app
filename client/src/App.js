import React from 'react';
import ApolloClient  from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks';

import { BookList, AddBook, BookDetails } from "./components";

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
        <BookDetails />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
