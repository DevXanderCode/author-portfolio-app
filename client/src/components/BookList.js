import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import {BookDetails} from "../components"

const BookList  = ({ data }) => {
    const [selectedBook, setSelectedBook] = useState({
        selectedBookId: null,
    });
   const displayBooks = (data) => {
        if(data.loading || data.books === undefined){
            return(
                <div>
                    Loading Books...
                </div>
            );
        }else{
            return data.books.map(book => (
            <li key={book.id} onClick={(e) => setSelectedBook({selectedBookId: book.id}) }>{book.name}</li>
            ));
        }
    };
    return(
        <div>
            <ul id="book-list">
                {displayBooks(data)}
            </ul>
            <BookDetails bookId={selectedBook.selectedBookId}/>
        </div>
    );
}
export default graphql(getBooksQuery)(BookList);