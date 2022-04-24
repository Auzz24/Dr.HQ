import Home from './Components/Home.js';
import Header from './Components/Header.js';
import Doctor from './Components/Doctor.js';
import Footer from './Components/Footer.js';
import Login from './Components/Login.js'
// import Search from './Components/Search.js'
import Department from './Components/Department';
import {BrowserRouter as Router,  Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql',
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    

      <ApolloProvider client={client}>
      <Router>
      <Header/>
        {/* <Switch> */}
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Doctor" component={Doctor}/>
          <Route exact path="/Login" component={Login}></Route>
          {/* <Route exact path="/Search" component={Search}></Route> */}
          {/* <Route exact path="/Login" component={Login}/> */}
          <Route exact path="/" component={Home}/>
          {/* <Search /> */}
        {/* </Switch> */}
      </Router>
      
    </ApolloProvider>
  );
}

export default App;
