import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({data: {book}}) => {
    console.log(book);
    const DisplayBookDetail = (book) => {
        if(book){
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All Books by this author:</p>
                    <ul className="other-books">
                        {
                            book.author.books.map((item) => {
                                return (
                                    <li key={item.id}>{item.name}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            );
        }else{
            return (
                <div>
                    No Book Selected...
                </div>
            );
        }
    }
    return(
        <div id="book-details">
            {DisplayBookDetail(book)}
        </div>
    );
}

export default graphql(getBookQuery, {
    options: ({bookId}) => {
        return{
            variables: {
                id: bookId
            }
        }
    }
})(BookDetails);