import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

const BookDetails = () => {
    return(
        <div id="book-details">
            <p>Output Book details here:</p>
        </div>
    );
}

export default BookDetails;