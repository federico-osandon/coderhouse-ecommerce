import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from './pages/Cart/Cart';

import { ListProvider } from './service/ListContext';


import "./App.css";

function App() {


  return (
    <BrowserRouter>
      <ListProvider>
        <div className="App">
          <NavBar />
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categories/:categoryId" component={Home} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </div>
      </ListProvider>
    </BrowserRouter >
  );
}

export default App;
