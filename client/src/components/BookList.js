import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

const BookList  = ({ data }) => {

   const displayBooks = (data) => {
        if(data.loading || data.books === undefined){
            return(
                <div>
                    Loading Books...
                </div>
            );
        }else{
            return data.books.map(book => (
            <li key={book.id}>{book.name}</li>
            ));
        }
    };
    return(
        <div>
            <ul id="book-list">
                {displayBooks(data)}
            </ul>
        </div>
    );
}
export default graphql(getBooksQuery)(BookList);