import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import './index.css';

const client = new ApolloClient({
  // uri: 'http://hasura:8080/v1/graphql',
  uri: 'https://8080-manuelmorenodev-ctatrain-no3o8mxch0c.ws-eu29.gitpod.io/v1/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);