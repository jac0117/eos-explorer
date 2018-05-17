import React, {Component} from 'react';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ApolloClient from 'apollo-client';
import {InMemoryCache as Cache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import {ApolloLink} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {

  createClient() {
    return new ApolloClient({
      link: ApolloLink.from([
        new HttpLink({uri: 'http://localhost:4000/graphql'}),
        // new HttpLink({ uri: 'http://ec2-54-172-182-101.compute-1.amazonaws.com:4000/graphql' }),
      ]),
      cache: new Cache()
    });
  }

  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <div className="App">
          <Header/>
          <HomePage/>
          <Footer/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
