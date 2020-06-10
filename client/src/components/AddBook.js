import React, { useState } from "react";
import { graphql } from "react-apollo";
import {flowRight as compose} from 'lodash';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../queries/queries";

const AddBook = ({ getAuthorsQuery, addBookMutation }) => {
    const [book, setBook] = useState({
        name: "",
        genre: "",
        authorId: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(book);
        addBookMutation({
            variables: {
                name: book.name,
                genre: book.genre,
                authorId: book.authorId
            },
            refetchQueries: [
                {query: getBooksQuery}
            ]
        });
        
        setBook({
            name: "",
            genre: "",
            authorId: ""
        });
    }
    
    const displayAuthor = (getAuthorsQuery) => {
        if(getAuthorsQuery.loading || !getAuthorsQuery.authors){
            return (
                <option disabled>Loading Authors...</option>
            );
        }
        else{
            return (
                getAuthorsQuery.authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
                ))
            );
        }
    };
    return(
      <form id="add-book" onSubmit={handleSubmit}>
          <div className="field">
              <label>Book name:</label>
              <input type="text" value={book.name} onChange={(e) => setBook({name: e.target.value, genre: book.genre, authorId: book.authorId})}/>
          </div>

          <div className="field">
              <label> Genre:</label>
              <input type="text" value={book.genre} onChange={(e) => setBook({genre: e.target.value,name: book.name,authorId: book.authorId})}/>
          </div>

          <div className="field">
              <label>Author:</label>
              <select value={book.authorId} onChange={e => setBook({authorId: e.target.value, name: book.name, genre: book.genre})}> 
                <option value="">Select Author</option>
                {displayAuthor(getAuthorsQuery)}
              </select>
          </div>

          <button>+</button>
      </form>
    );
}

export default compose(
    graphql(getAuthorsQuery, {
         name: "getAuthorsQuery"
        }),
    graphql(addBookMutation, { 
        name: "addBookMutation"
    }))(AddBook);