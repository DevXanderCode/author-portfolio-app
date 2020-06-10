const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

const uri =
  "mongodb+srv://user1:user1@graphql-project-tzocz.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("connected to database");
})

app.use("/graphql", graphqlHTTP({
    schema, graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
});