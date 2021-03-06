import React from "react";
import ReactDOM from "react-dom";
import {ApolloProvider } from "react-apollo";
import App from "./App";
import client from "./utils/apolloClient";

import {BrowserRouter as Router} from "react-router-dom"; 

import "./assets/main.css"

//Wrap app inside router
ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Router>,
    document.getElementById("root")
);