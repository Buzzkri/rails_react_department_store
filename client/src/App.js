import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import { Container, } from 'semantic-ui-react';
import { Route, Switch, } from 'react-router-dom';
// import ProductView from "./components/ProductView";
import ProductForm from "./components/ProductForm";

const App = () => (
  <>
    <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/new" component={ProductForm} />
          <Route component={NoMatch} />
          
        </Switch>
      </Container>
  </>
);

export default App;


