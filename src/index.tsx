import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import awsconfig from "./aws-exports";
import { Amplify } from "aws-amplify";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ErrorBoundry from "./components/ErrorBoundry";

Amplify.configure(awsconfig);

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-api-key": awsconfig.aws_appsync_apiKey,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </ApolloProvider>
  </React.StrictMode>
);
