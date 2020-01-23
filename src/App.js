import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Login from './components/Login';
import Default from './components/Default';
import Modal from './components/Modal';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/"  />
        {/* exact di berikan pada / pertama */}
        <Route path="/details" component={Details} /> 
         <Route path="/cart" component={Cart} />
         <Route path="/login" component={Login} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
